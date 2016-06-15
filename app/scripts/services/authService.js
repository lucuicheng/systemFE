'use strict';

var authService = angular.module('authService', []);

/**
 * 身份认证和授权服务,这个在这里独立出来
 */
authService.factory('authService',
    function ($http, $state, $location, $q, AUTH_PAGES, cookieService, commonService) {

        var authService = {};

        authService.login = function (credentials) {
            var url = commonService.getBaseParams().url + 'datas/user/detail.json';
            return commonService.handleSyncData(url, credentials)//处理登录信息
                .then(function (data) {
                    if (data !== null && data.user !== null) {
                        //登录后在授权页面中移除登录页
                        var roleResources = data.user.role.roleResources;
                        roleResources.splice(roleResources.indexOf(AUTH_PAGES.login), 1);//默认登录页在第一个
                        data.user.role.roleResources = roleResources;

                        //登录用户保存到缓存
                        cookieService.createUserCookie(data.sessionId, data.user.id, data.user.role);

                        return data.user;//承诺处理（显示）登录信息
                    }
                });
        };

        authService.logout = function () {

        };

        authService.isAuthenticated = function (authorizedRole) {//是否认证
            return !!cookieService.getUserCookie().get('userId');//用户缓存是及用户id否存在
        };

        authService.isNonAuthorization = function(currentPath) {//页面是否授权，非授权页面，游客可直接查看的页面(针对游客)
            var nonAuthorizedResources = [
                '/',
                '/login.htm',
                '/not-found.htm',
                /*'/blank/basic.htm',
                '/blank/list2.htm'*/
            ];

            if (!angular.isArray(nonAuthorizedResources)) {//可直接查看的页面资源列表
                nonAuthorizedResources = [nonAuthorizedResources];
            }

            return (nonAuthorizedResources.indexOf(currentPath) !== -1);
        };

        authService.isAuthorized = function (currentPath) {//页面是否授权，授权页面（针对用户）

            //var authorizedRole = angular.fromJson(cookieService.getStorage().userRole);//获取用户缓存中的其权限
            var authorizedRole = cookieService.getUserCookie().get("userRole");//获取用户缓存中的其权限
            var authorizedRoleResources =  authorizedRole.roleResources;//权限资源列表

            if (!angular.isArray(authorizedRoleResources)) {//如果不是数组，转成数组形式，权限资源列表
                authorizedRoleResources = [authorizedRoleResources];
            }

            //当前页面是否在权限列表中
            return (authService.isAuthenticated() && authorizedRoleResources.indexOf(currentPath) !== -1);
        };

        authService.permissionCheck = function (currentPath) {//特殊权限及其他情况的处理,一般都是登录后操作,

        };

        return authService;

    }
);
