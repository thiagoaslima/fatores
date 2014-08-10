'use strict';

describe('Controller: EscopoCtrl', function () {

  // load the controller's module
  beforeEach(module('fatoresApp'));

  var EscopoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EscopoCtrl = $controller('EscopoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
