'use strict';

var blankModuleController = angular.module('blankModuleController', []);

blankModuleController.controller(
    'blankMainCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);

blankModuleController.controller(
    'blankListCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);

blankModuleController.controller(
    'blankDetailCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);
