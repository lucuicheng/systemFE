'use strict';

var apiModuleController = angular.module('apiModuleController', []);

apiModuleController.controller(
    'apiMainCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);

apiModuleController.controller(
    'apiListCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);

apiModuleController.controller(
    'apiDetailCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);
