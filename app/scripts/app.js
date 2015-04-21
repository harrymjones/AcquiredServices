'use strict';

/**
 * @ngdoc overview
 * @name acquiredServicesApp
 * @description
 * # acquiredServicesApp
 *
 * Main module of the application.
 */
angular
  .module('acquiredServicesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngFileUpload',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
