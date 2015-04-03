describe('Controller: CityController', function() {
  // Instantiate a new version of my module before each test
  beforeEach(module('citiesApp'));

  var city;

  // Before each unit test, instantiate a new instance
  // of the controller
  beforeEach(inject(function($controller) {
    city = $controller('CityController');
  }));

  it('should have items available on load', function() {
    expect(city.name).toEqual('Reno');
  });
});  


