'use strict';

var projectModuleRoute = angular.module('projectModuleRoute', []);

projectModuleRoute.config(function ($stateProvider) {
    $stateProvider
        .state('project-main', {
            url: '/project/index.htm',
            templateUrl: 'modules/project/views/main.html',
            controller: 'projectMainCtrl',
        })
        .state('project-list', {
            url: '/project/list.htm?type&id',
            templateUrl: 'modules/project/views/list.html',
            controller: 'projectListCtrl',
        })
        .state('project-detail', {
            url: '/project/detail.htm?type&id',
            templateUrl: 'modules/project/views/detail.html',
            controller: 'projectDetailCtrl',
        });
});
