'use strict';

/**
 * @ngdoc function
 * @name fatoresApp.controller:MaincontrollerCtrl
 * @description
 * # MaincontrollerCtrl
 * Controller of the fatoresApp
 */
angular.module('fatoresApp')
    .controller('mainController', ['$scope',
        function($scope) {
            $scope.config = {
                empresa: 0
            };
        }
    ]);