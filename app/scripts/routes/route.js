'use strict';

var routes = [
    //auto inject from module
    'blankModuleRoute',
    'indexModuleRoute',
	'resumeModuleRoute',	'blogModuleRoute',	'projectModuleRoute',	'demoModuleRoute',	'toolsModuleRoute',	'apiModuleRoute',	//end inject
]

var appRoute = angular.module('appRoute', routes);

appRoute.config(
    function ($stateProvider, $urlRouterProvider, $routeProvider, $locationProvider) {
        $stateProvider
            .state('inde', {
                url: '/',
                templateUrl: 'modules/index/views/main.html',
                controller: 'indexMainCtrl',
            })
            .state('app', {
                url: '/app',
                templateUrl: 'modules/common/views/index.html',
                controller: 'applicationController',
                resolve: {
                    permission: function (authService, $location) {
                        return authService.permissionCheck($location.path());
                    }
                }
            })
            .state('login', {
                url: '/login.htm?token',
                templateUrl: 'modules/common/views/login.html',
                controller: 'applicationController',
                resolve: {
                    permission: function (authService, $location) {
                        return authService.permissionCheck($location.path());
                    }
                }
            })
            .state('register', {
                url: '/register.htm?token',
                templateUrl: 'modules/common/views/register.html',
                controller: 'applicationController',
                resolve: {
                    permission: function (authService, $location) {
                        return authService.permissionCheck($location.path());
                    }
                }
            })
            .state('not-found', {
                url: '/not-found.htm',
                templateUrl: '404.html',
                controller: 'notFoundCtrl',
            });
        $urlRouterProvider
            .otherwise("/");
    });