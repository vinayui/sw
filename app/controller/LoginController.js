(function(){
	var amex = angular.module('amex');
	amex.controller('LoginController', ['$scope', '$http','$location', function($scope, $http, $location) {
		 $scope.steps = ['Create User ID & Password', 
		                 'Security Question & Access Code',
		                 'Confirm Contact ID',
		                 'Confirmation'];
		 $scope.stepActive = 1;
		 $scope.saveNnext = function(){
			 $scope.stepActive++;
		 }
	}]);
})();