'use strict';

var indexModuleController = angular.module('indexModuleController', []);

indexModuleController.controller(
    'indexMainCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);

indexModuleController.controller(
    'indexListCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);

indexModuleController.controller(
    'indexDetailCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);
