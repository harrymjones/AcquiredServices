'use strict';

/**
 * @ngdoc function
 * @name acquiredServicesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the acquiredServicesApp
 */
angular.module('acquiredServicesApp')
.controller('MainCtrl', function ($scope, $timeout, $window, $http) {
    window.SCOPE = $scope;

    $scope.loading = true;

    $timeout(function() {
        $scope.loading = false;
    }, 2000);

    $scope.transition = false;
    $scope.goTo = function(view){
        $scope.next = 'views/' + view + '.html';
        $window.scrollTo(0, 0);
        $scope.transition = true;   
    }

    /********* START CALENDAR ********/
    $scope.dt = undefined;
    $scope.df = undefined;

    $scope.openFrom = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.openedFrom = true;
        $scope.openedTo = false;
    };

    $scope.openTo = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.openedTo = true;
        $scope.openedFrom = false;
    };

    $scope.$watch('df', function() {
        if($scope.df === undefined)
            return;
        $scope.dt = $scope.df;
        $scope.openedTo = true;
        $scope.openedFrom = false; 
    });

    $scope.format = 'MM/dd/yyyy';
    /********* END CALENDAR ********/


    /********* START FILES *********/
    $scope.clearInvoice = function(){
        $scope.files = [];
    };

    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                console.log(file);
                /*$upload.upload({
                    url: 'upload/url',
                    fields: {'username': $scope.username},
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                });*/
            }
        }
    };
    /******** END FILES ********/


    /******** START MULTI *********/
    $scope.typeText = "Select";
    $scope.setType = function(type){
        $scope.type = type;
        $scope.typeText = type;
    };

    $scope.pocs = [];

    $scope.addPoc = function(poc){
        if($scope.pocs.indexOf(poc) >= 0) {
            return;
        }
        $scope.pocs.push(poc);
        $scope.poc = "";
    };

    $scope.removePoc = function(poc){
        var index = $scope.pocs.indexOf(poc);
        $scope.pocs.splice(index, 1);
    };
    /******** END MULTI *********/


    /******** START LOOKUP *********/
    $scope.vsuggest = true;
    $scope.selectedVendor = "";
    //Populate fields with chosen vendor data
    $scope.selectVendor = function(v) {
        $scope.selectedVendor = v;

        $scope.vname = v.name;
        
        $scope.vaddress1 = v.add1;
        $scope.vaddress2 = v.add2;
        if(v.add3) $scope.vaddress3 = v.add3;
        else $scope.vaddress3 = "";

        $scope.vphone = v.phone;
        $scope.pocs = v.poc;
        $scope.website = v.website;

        $scope.vsuggest = false;
    };

    $scope.$watch('vname', function () {
        if($scope.selectedVendor.name != $scope.vname) $scope.vsuggest = true;
    });

    $scope.vendors = [
        {
        'name': 'Verizon',
        'add1': 'Building 12',
        'add2': '400 Cisco Way',
        'add3': 'CA, 95134',
        'phone': '+1-226-707-1845',
        'poc': ['Mr Harry Jones', 'Mr Jerry Applegate'],
        'website': 'www.verizon.com'
        },
        {
        'name': 'Vodaphone',
        'add1': 'Apt. 1117',
        'add2': '320 Crescent Village Circle',
        'add3': 'CA, 95134',
        'phone': '+1-669-225-8500',
        'poc': ['Mr Edgar Badgerdon', 'Mrs Audrey Mincebucket'],
        'website': 'www.vodaphone.com'
        },
        {
        'name': 'ATT',
        'add1': 'Apartment 1',
        'add2': '3200 Zanker Road',
        'phone': '+1-669-226-5186',
        'poc': ['Senor Propadismo', 'Dr Jeffrey Crankshaft'],
        'website': 'www.att.com'
        }
    ];

     $http.get("scripts/server/vendors.php")
    .success(function (response) {
        $scope.names = response.vendors;
        alert($scope.names);
    })
    .error(function (response) {
        console.error(response);s
    });
    /******** END LOOKUP **********/
})
.directive('inputFocus', function($timeout, $rootScope) {
    return {
        restrict: 'A',
        scope: {
            focusValue: "=doFocus"
        },
        link: function($scope, $element) {
            $scope.$watch("doFocus", function() {
                $element[0].focus();
            })
        }
    }
});

