'use strict';

var toolsModuleController = angular.module('toolsModuleController', []);

toolsModuleController.controller(
    'toolsMainCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);

toolsModuleController.controller(
    'toolsListCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);

toolsModuleController.controller(
    'toolsDetailCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);
