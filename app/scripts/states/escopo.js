'use strict';

angular.module('routes')
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/configuracao');

        // use the HTML5 History API
		$locationProvider.html5Mode(true);

        $stateProvider
            .state('escopo', {
                url: '/configuracao',
                templateUrl: 'escopo-form.html'
            });
    });