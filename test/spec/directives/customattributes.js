'use strict';

describe('Directive: customAttributes', function () {

  // load the directive's module
  beforeEach(module('fatoresApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<custom-attributes></custom-attributes>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the customAttributes directive');
  }));
});
