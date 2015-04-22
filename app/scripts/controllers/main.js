'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
 angular.module('mytodoApp')
 .controller('MainCtrl', function ($scope,$http,$window) {



    $scope.json = [];
    $http.get('upload/BlueSky.json').success(function(data) {
    	$scope.json = data;
    });
    console.log('scope.json: '+$scope.json);


    $scope.urlpart1 = 'http://198.11.173.181/cgi-bin/GInfo.dll?EmmisTrack&w=blueskyexpress&cno=';
    $scope.urlpart2 = '&cmodel=&ntype=0';
    $scope.redirectToTrackingSite = function(){
    	$window.open($scope.urlpart1+$scope.json.tn+$scope.urlpart2, '_blank'); 
    };


});
