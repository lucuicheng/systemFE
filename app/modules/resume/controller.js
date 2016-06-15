'use strict';

var resumeModuleController = angular.module('resumeModuleController', []);

resumeModuleController.controller(
    'resumeMainCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);

resumeModuleController.controller(
    'resumeListCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {};

    }
);

resumeModuleController.controller(
    'resumePageCtrl',
    function ($scope, $stateParams, $rootScope) {
        $scope.formData = {};
        console.log($rootScope.pageClass);
        console.log('done');
    }
);

resumeModuleController.controller(
    'resumeDetailCtrl',
    function ($scope, $stateParams) {
        $scope.formData = {}

        console.log('done');
    }
);
