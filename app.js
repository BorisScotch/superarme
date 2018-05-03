var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider,  $locationProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/novedades', {
		templateUrl: 'pages/novedades.html',
		controller: 'novedadesController'
	})
	.when('/contactanos', {
		templateUrl: 'pages/contactanos.html',
		controller: 'contactanosController'
	})
	.when('/participa', {
		templateUrl: 'pages/participa.html',
		controller: 'participaController'
	})
	.when('/galeriadefotos', {
		templateUrl: 'pages/galeriadefotos.html',
		controller: 'galeriadefotosController'
	})

	 // use the HTML5 History API
        $locationProvider.html5Mode(true);
});


myApp.controller('mainController', 
	['$scope', '$log',  function($scope, $log){
}]);

myApp.controller('novedadesController', 
	['$scope', '$log',  function($scope, $log){
}]);

myApp.controller('contactanosController', 
	['$scope', '$log',  function($scope, $log){
}]);

myApp.controller('participaController', 
	['$scope', '$log',  function($scope, $log){
}]);
myApp.controller('galeriadefotosController', 
	['$scope', '$log',  function($scope, $log){
}]);