'use strict';

/* Controllers */
angular.module('citiesApp', [])
    .controller('CityController', [function() {
      var self = this;
      self.country = 'USA';
      self.cities = [
      {
        name: 'Reno',
        state: 'Nevada',
        attractions: ['casinos', 'Tahoe', 'rodeos']
      },
      {
        name: 'DC',
        state: 'DC',
        attractions: ['museums']
      },
      {
        name: 'Boise',
        state: 'Idaho',
        attractions: ['potatoes']
      },
      {
        name: 'Orlando',
        state: 'Florida',
        attractions: ['Epcot', 'Disneyworld']
      }
      ]
  }]);


