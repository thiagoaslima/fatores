'use strict';

/**
 * @ngdoc directive
 * @name fatoresApp.directive:listSelectorOption
 * @description
 * # listSelectorOption
 */
angular.module('customElements')
    .directive('listSelectorOption', function() {
        return {
            templateUrl: 'partials/listselectoroption.html',
            restrict: 'E',
            replace: true,
            scope: {
                ngModel: '=',
                title: '@'
            },
            require: '^listSelector',
            controllerAs: 'optCtrl',
            controller: function($scope, $element, $attrs) {
                this.hide = false;
                this.selected = false;
                this.title = $attrs.title;
                $scope.item = $scope.$parent.item;
                console.log('opt', this, $scope);
            },
            link: function(scope, element, attrs, parentCtrl) {
                scope.states = parentCtrl.states;

                scope.isSelected = function(value) {
                    scope.optCtrl.selected = (value === scope.ngModel[scope.title]);
                    if (scope.optCtrl.selected) {
                        scope.states.showAll = false;
                    }
                    console.log(value, value === scope.ngModel[scope.title], scope);
                };

                scope.$watch(scope.optCtrl.hide, function(newVal) {
                    if (newVal) {
                        jQuery(element).attr('hide', scope.optCtrl.hide);
                    }
                });
            }
        };
    })
    .directive('slide', ['$animate',
        function($animate) {
            return function(scope, element, attrs) {
                scope.$watch(attrs.hide, function(newVal) {
                    if (newVal) {
                        $animate.addClass(element, attrs.slide || "down");
                    } else {
                        $animate.removeClass(element, attrs.slide || "down");
                    }
                });
            };
        }
    ]);