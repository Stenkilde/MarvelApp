// Angular App

	// create the module and name it marvelApp
	var marvelApp = angular.module('marvelApp', ['ngRoute']);

	// Here we will create our routing
	marvelApp.config(function($routeProvider, $locationProvider) {
		$routeProvider

			// Route for home
			.when('/', {
				templateUrl: 'pages/home.html',
				controller:  'mainController'
			})

			// Route for Heroes
			.when('/heroes', {
				templateUrl: 'pages/heroes.html',
				controller:  'heroesController'
			})

			// Route for Villains
			.when('/villains', {
				templateUrl: 'pages/villains.html',
				controller:  'villainsController'
			})	

			// Route for Organizations
			.when('/organizations', {
				templateUrl: 'pages/organizations.html',
				controller:  'organizationController'
			})	

			// Route for help
			.when('/help', {
				templateUrl: 'pages/help.html',
				controller:  'helpController'
			})	

			// Route for about
			.when('/about', {
				templateUrl: 'pages/about.html',
				controller:  'aboutController'
			});

			// use the HTML5 History API
			$locationProvider.html5Mode(true);
	});

	// create the controller and inject Angular's $scope
	marvelApp.controller('mainController', function($scope) {
		$scope.pageClass = 'page-home';
		$scope.message = 'So you want to know about Superheroes and the enemies?';
	});

	marvelApp.controller('heroesController', function($scope) {
		$scope.pageClass = 'page-heroes';
		$scope.message = 'Steffen er en faggot';
	});

	marvelApp.controller('villainsController', function($scope) {
		$scope.pageClass = 'page-villains';
		$scope.message = 'YOURE A Turd';
	});

	marvelApp.controller('organizationController', function($scope) {
		$scope.pageClass = 'page-organization';
		$scope.message = 'YOURE A nurd';
	});

	marvelApp.controller('helpController', function($scope) {
		$scope.pageClass = 'page-help';
		$scope.message = 'YOURE A noob';
	});

	marvelApp.controller('aboutController', function($scope) {
		$scope.message = 'YOURE A NERD';
	});
