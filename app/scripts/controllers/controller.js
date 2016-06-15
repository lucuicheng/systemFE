'use strict';

var controllers = [
    //auto inject from module
    'blankModuleController',
    'indexModuleController',
	'resumeModuleController',	'blogModuleController',	'projectModuleController',	'demoModuleController',	'toolsModuleController',	'apiModuleController',	//end inject
]

var appController = angular.module('appController', controllers);

/**
 * 全局控制器，处理认证和权限等
 */
appController.controller(
    'applicationController',
    function ($scope, $rootScope, AUTH_EVENTS, authService) {
        $scope.credentials = {
            username: '',
            password: ''
        };

        $scope.setCurrentUser = function (user) {
            $scope.user = user;
        }

        $scope.login = function (credentials) {
            console.log('sa')
            authService.login(credentials)
                .then(function (user) {
                    $scope.setCurrentUser(user);//最顶层的控制器中的变量
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);

                }, function () {
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                });

        };

        $scope.loginResult = function () {

            //

        };
    }
);

/**
 * 缺省控制器
 */
appController.controller(
    'notFoundCtrl',
    function ($scope, $rootScope, $state, $stateParams) {
        $scope.formData = {};
    }
);

/**
 * 普通信息弹出框页面控制器
 */
appController.controller(
    'modalInfoInstanceCtrl',
    function ($scope, $uibModalInstance, type, message) {

        $scope.type = type;
        $scope.message = message;

        $scope.ok = function () {
            $uibModalInstance.close($scope.selected);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }
);

/**
 * 操作类信息弹出框控制器
 */
appController.controller(
    'modalOperateInfoInstanceCtrl',
    function ($scope, $uibModalInstance, operate, message, params) {

        $scope.operate = operate;
        $scope.message = message;

        if (Boolean(params.type)) {
            $scope.operator = '-';
        } else {
            $scope.operator = '+';
        }

        $scope.ok = function () {
            $uibModalInstance.close($scope.selected);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }
);
