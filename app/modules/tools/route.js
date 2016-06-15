'use strict';

var toolsModuleRoute = angular.module('toolsModuleRoute', []);

toolsModuleRoute.config(function ($stateProvider) {
    $stateProvider
        .state('tools-main', {
            url: '/tools/index.htm',
            templateUrl: 'modules/tools/views/main.html',
            controller: 'toolsMainCtrl',
        })
        .state('tools-list', {
            url: '/tools/list.htm?type&id',
            templateUrl: 'modules/tools/views/list.html',
            controller: 'toolsListCtrl',
        })
        .state('tools-detail', {
            url: '/tools/detail.htm?type&id',
            templateUrl: 'modules/tools/views/detail.html',
            controller: 'toolsDetailCtrl',
        });
});
