'use strict';

/**
 * @ngdoc directive
 * @name fatoresApp.directive:uiIcon
 * @description
 * # uiIcon
 */
angular.module('customElements')
    .directive('uiIcon', ['$http',
        function($http) {
            return {
                restrict: 'E',
                replace: true,
                scope: true,
                template: '<svg class="ui-icon" ng-class={{name}}  ng-class={{classes}}><use xlink:href="{{ id }}"></svg>',
                link: function(scope, element, attrs) {
                    scope.name = attrs.icon;
                    scope.classes = attrs.icon + (attrs.class) ? ' ' + attrs.class : '';
                    scope.id = '#' + attrs.icon;

                    var tmpl = document.getElementById('svg-icons');
                    if (!scope.$root.hasOwnProperty('svgLoading')) {
                        scope.$root.svgLoading = false;
                    }
                    var svgLoading = scope.$root.svgLoading;

                    if (!tmpl && !svgLoading) {
                        scope.$root.svgLoading = true;
                        $http.get('styles/icons/icons.svg')
                            .success(function(resp) {
                                var body = document.getElementsByTagName('body')[0];
                                angular.element(body).prepend(resp);
                                scope.$root.svgLoading = false;
                            })
                            .error(function() {
                                console.log('unable to get icons.svg');
                            });
                    }
                }
            };
        }
    ]);