'use strict';

/**
 * @ngdoc function
 * @name acquiredServicesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the acquiredServicesApp
 */
angular.module('acquiredServicesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
