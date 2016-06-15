'use strict';

var blogModuleController = angular.module('blogModuleController', []);

blogModuleController.controller(
    'blogMainCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);

blogModuleController.controller(
    'blogListCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);

blogModuleController.controller(
    'blogDetailCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}
        $scope.code = "";

        console.log('done');
    }
);
