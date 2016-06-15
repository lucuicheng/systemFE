'use strict';

var blogModuleRoute = angular.module('blogModuleRoute', []);

blogModuleRoute.config(function ($stateProvider) {
    $stateProvider
        .state('blog-main', {
            url: '/blog/index.htm?type&id',
            templateUrl: 'modules/blog/views/main.html',
            controller: 'blogMainCtrl',
        })
        .state('blog-list', {
            url: '/blog/list.htm?type&id',
            templateUrl: 'modules/blog/views/list.html',
            controller: 'blogListCtrl',
        })
        .state('blog-detail', {
            url: '/blog/detail.htm?type&id',
            templateUrl: 'modules/blog/views/detail.html',
            controller: 'blogDetailCtrl',
        });
});
