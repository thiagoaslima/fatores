/*
 * this file keeps track of all system modules,
 * allowing each module to be expanded in another js file
*/

// module for attributes directives
angular.module('customAttributes', ['ngAnimate']);

// module for elements
angular.module('customElements', ['ngAnimate']);

// module for routes and states
angular.module('routes', ['ui.router']);