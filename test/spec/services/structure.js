'use strict';

describe('Service: structure', function () {

  // load the service's module
  beforeEach(module('fatoresApp'));

  // instantiate service
  var structure;
  beforeEach(inject(function (_structure_) {
    structure = _structure_;
  }));

  it('should do something', function () {
    expect(!!structure).toBe(true);
  });

});
