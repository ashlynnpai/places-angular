//comments from AngularJS: Up and Running
describe('CityController', function() {
  // Instantiate a new version of my module before each test
  beforeEach(module('citiesApp'));

  var city;

  // Before each unit test, instantiate a new instance
  // of the controller
  beforeEach(inject(function($controller) {
    city = $controller('CityController');
  }));

  it('should have items available on load', function() {
    expect(city.country).toEqual('USA');
    expect(city.cities.length).toBe(4);
  });
});  


