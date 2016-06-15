'use strict';

var apiModuleRoute = angular.module('apiModuleRoute', []);

apiModuleRoute.config(function ($stateProvider) {
    $stateProvider
        .state('api-main', {
            url: '/api/index.htm',
            templateUrl: 'modules/api/views/main.html',
            controller: 'apiMainCtrl',
        })
        .state('api-list', {
            url: '/api/list.htm',
            templateUrl: 'modules/api/views/list.html',
            controller: 'apiListCtrl',
        })
        .state('api-detail', {
            url: '/api/detail.htm',
            templateUrl: 'modules/api/views/detail.html',
            controller: 'apiDetailCtrl',
        });
});
