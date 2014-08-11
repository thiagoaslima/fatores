'use strict';

/**
 * @ngdoc directive
 * @name fatoresApp.directive:listSelector
 * @description
 * # listSelector
 */
angular.module('customElements')
    .directive('listSelector', ['itens', 'structure',
        function(itens, structure) {
            return {
                templateUrl: 'partials/listselector.html',
                restrict: 'E',
                replace: true,
                scope: {
                    ngModel: '='
                },
                controllerAs: 'selCtrl',
                controller: function($scope, $element, $attrs) {
                    this.optionSelected = false;
                    this.elem = $attrs.title;
                    this.title = structure.getPlural(this.elem)[0];
                    this.itens = itens[this.title];
                    this.states = {
                    	showAll: true
                    };
                },
            };
        }
    ]);