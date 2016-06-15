'use strict';

var indexModuleRoute = angular.module('indexModuleRoute', []);

indexModuleRoute.config(function ($stateProvider) {
    $stateProvider
        .state('index-main', {
            url: '/index/basic.htm?type&id',
            templateUrl: 'modules/index/views/main.html',
            controller: 'indexMainCtrl',
        })
        .state('index-list', {
            url: '/index/list.htm?type&id',
            templateUrl: 'modules/index/views/list.html',
            controller: 'indexListCtrl',
        })
        .state('index-detail', {
            url: '/index/detail.htm?type&id',
            templateUrl: 'modules/index/views/detail.html',
            controller: 'indexDetailCtrl',
        });
});
