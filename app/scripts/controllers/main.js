'use strict';

/**
 * @ngdoc function
 * @name acquiredServicesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the acquiredServicesApp
 */
angular.module('acquiredServicesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
