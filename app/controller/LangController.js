(function(){
	var amex = angular.module('amex');
	amex.controller('LangController', ['$scope', '$http','$location', 'serviceUrls', function($scope, $http, $location,serviceUrls) {
		  /*$http.get('getDetails.json').success(function(data) {
		    $scope.details = data;
		  });*/

		var headings = ["Welcome to American Express @Work","First Time Walk-Through"];
		
		$scope.userLanguages = '';
        $scope.languages = [{"selValue":"en-uk","text" : "English(UK)"},
                            {"selValue":"en-us","text" : "English(US)"}];
		
		$scope.heading = headings[0];
		$scope.saveLang = function(){
			$location.path('/login');
		};
	}]);
})();
