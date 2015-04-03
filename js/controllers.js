'use strict';

/* Controllers */
angular.module('citiesApp', [])
    .controller('CityController', [function() {
      var self = this;
      self.name = 'Reno';
 			self.state = 'Nevada';
 			self.attractions = ['casinos', 'Tahoe', 'rodeos']
  }]);


