'use strict';

var services = [
    'interceptor',
    'authService',
    'teacherService',
    //auto inject from module
    'blankModuleService',
    'indexModuleService',
	'resumeModuleService',
	'blogModuleService',
	'projectModuleService',
	'demoModuleService',
	'toolsModuleService',
	'apiModuleService',
	//end inject
]

var appService = angular.module('appService', services);

/**
 * 一些通用服务方法
 */
appService.factory('commonService',
    function ($http, $state, $q, $uibModal) {

        var service = { // our factory definition

            getParams: function (params) {
                return params;
            },

            getBaseParams: function () {
                return {
                    'url': 'http://127.0.0.1:9000/',
                    /*'url' : 'http://www.dfzhgx.com/',*/
                    'project': 'web'
                };
            },

            getSyncData: function (url, params) {
                var deferred = $q.defer();

                $http.post(url, params)
                    .success(function (data, status, headers, config) {
                        deferred.resolve(data);
                    })
                    .error(function (data, status, headers, config) {
                        deferred.reject(data);
                    });

                return deferred.promise;
            },

            handleSyncData: function (url, params) {
                var deferred = $q.defer();

                $http.get(url, params)
                    .success(function (data, status, headers, config) {
                        deferred.resolve(data);
                    })
                    .error(function (data, status, headers, config) {
                        deferred.reject(data);
                    });

                return deferred.promise;
            },

            openOperateModel: function (target, operate, message, params) {
                var base = this;
                var modalInstance = $uibModal.open({
                    templateUrl: 'modules/common/views/operateModal.html',
                    controller: 'modalOperateInfoInstanceCtrl',
                    resolve: {
                        target: function () {
                            return target;
                        },
                        operate: function () {
                            return operate;
                        },
                        message: function () {
                            return message;
                        },
                        params: function () {
                            return params;
                        }
                    }
                });
                modalInstance.opened.then(function () {//
                    var condition = (params !== null && params.time !== null && typeof (params.time) !== 'undefined');
                    var time = condition ? params.time : 1800;//默认1800ms
                    setTimeout(function () {
                        modalInstance.close('auto close');
                    }, time);
                });
                modalInstance.result.then(function (result) {
                    //更新操作记录数 及 插入操作历史记录
                    if (operate != null && target != null) {
                        var url = base.getBaseParams().url + 'datas/' + target + '/' + operate + 'History/save';
                        $http.post(url, params);
                    }//

                }, function (reason) {
                    console.log(reason);

                });
            },

            openModelAuto: function (type, message, cancelUrl, cancelUrlParams) {
                var modalInstance = $uibModal.open({
                    templateUrl: 'modules/common/views/modal.html',
                    controller: 'modalInfoInstanceCtrl',
                    resolve: {
                        message: function () {
                            return message;
                        },
                        type: function () {
                            return type;
                        }
                    }
                });
                modalInstance.opened.then(function () {//打开
                    //console.log('modal is opened');
                    setTimeout(function () {
                        modalInstance.close('auto close');
                    }, 2000);
                });

                modalInstance.result.then(function (result) {//撤销
                    //console.log(result);
                    if (cancelUrl != null) {
                        $state.go(cancelUrl, cancelUrlParams, {inherit: false, reload: true});
                    }

                }, function (reason) {//关闭
                    if (cancelUrl != null) {
                        $state.go(cancelUrl, cancelUrlParams, {inherit: false, reload: true});
                    }

                });
            }

        };

        return service;
    }
);


/**
 * angularjs自身的缓存，刷新后即会清空
 */
authService.service('cacheService',
    function ($cacheFactory) {
        var userCache = $cacheFactory('userCache');
        var service = {};

        service.createUserCache = function (sessionId, userId, userRole) {
            userCache.put('sessionId', sessionId);
            userCache.put('userId', userId);
            userCache.put('userRole', userRole);//这应该是一个对象
        };

        service.getUserCache = function () {
            return userCache;
        };

        service.destroyUserCache = function () {
            userCache.remove('sessionId');
            userCache.remove('userId');
            userCache.remove('userRole');//这应该是一个对象
        };

        service.destroy = function () {
            userCache.destroy();
        };

        return service;
    }
);

/**
 * angularjs自身的cookie
 */
authService.service('cookieService',
    function ($cookieStore) {
        var userCache = $cookieStore;
        var service = {};

        service.createUserCookie = function (sessionId, userId, userRole) {
            userCache.put('sessionId', sessionId);
            userCache.put('userId', userId);
            userCache.put('userRole', userRole);//这应该是一个对象
        };

        service.getUserCookie = function () {
            return userCache;
        };

        service.destroyUserCookie = function () {
            userCache.remove('sessionId');
            userCache.remove('userId');
            userCache.remove('userRole');//这应该是一个对象
        };

        service.destroy = function () {
            userCache.destroy();
        };

        return service;
    }
);

/**
 * H5的缓存，
 * sessionStorage浏览器新开标签后即会清空, 每在新标签或者新窗口中打开一个新页面，都会初始化一个新的会话
 * localStorage持久但是但是共享
 */
authService.service('storageService',
    function () {
        var storage = sessionStorage;
        //var storage = localStorage;
        var service = {};

        service.createUserStorage = function (sessionId, userId, userRole) {
            storage.setItem('sessionId', sessionId);
            storage.setItem('userId', userId);
            storage.setItem('userRole', angular.toJson(userRole));//这应该是一个对象,转成字符后才能保存
        };

        service.destroyUserStorage = function () {
            storage.removeItem('sessionId');
            storage.removeItem('userId');
            storage.removeItem('userRole');//这应该是一个对象
        };

        service.getStorage = function () {
            return angular.fromJson(storage);
        };

        service.clear = function () {
            storage.clear();
        };

        return service;
    }
);