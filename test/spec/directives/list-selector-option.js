'use strict';

describe('Directive: listSelectorOption', function () {

  // load the directive's module
  beforeEach(module('fatoresApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<list-selector-option></list-selector-option>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the listSelectorOption directive');
  }));
});
