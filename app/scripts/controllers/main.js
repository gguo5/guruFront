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
 	$scope.urlParts = {};
 	$scope.urlParts.protocol = "http"; 
 	$scope.urlParts.domain = "http://198.11.173.181/cgi-bin/GInfo.dll?EmmisTrack&w=blueskyexpress&cno="; 
 	$scope.urlParts.prefix = "&cmodel=&ntype=0"; 
 	$scope.json;
 	$http.get('upload/BlueSky.json').success(function(data) {
 		$scope.json = data;
 	});
 	console.log($scope.json);
 	$scope.tn = $scope.json.tn;
 	$scope.url = 'http://198.11.173.181/cgi-bin/GInfo.dll?EmmisTrack&w=blueskyexpress&cno='+'&cmodel=&ntype=0';
 	$scope.redirectToGoogle = function(){
 		$window.open($scope.url, '_blank'); 
 	};
 	$scope.makeUrl = function() {
 		return $scope.urlParts.protocol + "://" + $scope.urlParts.domain +$scope.tn+  $scope.urlParts.prefix;
 	}
 });
