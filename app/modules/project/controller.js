'use strict';

var projectModuleController = angular.module('projectModuleController', []);

projectModuleController.controller(
    'projectMainCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);

projectModuleController.controller(
    'projectListCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);

projectModuleController.controller(
    'projectDetailCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);
