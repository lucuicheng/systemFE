'use strict';

var demoModuleRoute = angular.module('demoModuleRoute', []);

demoModuleRoute.config(function ($stateProvider) {
    $stateProvider
        .state('demo-main', {
            url: '/demo/index.htm',
            templateUrl: 'modules/demo/views/main.html',
            controller: 'demoMainCtrl',
        })
        .state('demo-list', {
            url: '/demo/list.htm?type&id',
            templateUrl: 'modules/demo/views/list.html',
            controller: 'demoListCtrl',
        })
        .state('demo-detail', {
            url: '/demo/detail.htm?type&id',
            templateUrl: 'modules/demo/views/detail.html',
            controller: 'demoDetailCtrl',
        })
        .state('demo-demo', {
            url: '/demo/special/:name.htm?type&id',
            templateUrl: 'modules/demo/views/demo.html',
            controller: 'demoSpecialCtrl',
        });
});
