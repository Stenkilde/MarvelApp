// Angular App

	// create the module and name it marvelApp
	var marvelApp = angular.module('marvelApp', ['ngRoute', 'ngAnimate']);

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
		$scope.message = 'So you want to know about MCU? I got you covered!';
	});

	marvelApp.controller('heroesController', function($scope) {
		$scope.message = 'These are the most important heroes / good characters in the MCU';
	});

	marvelApp.controller('villainsController', function($scope) {
		$scope.message = 'These are the most important villains / evil characters in the MCU';
	});

	marvelApp.controller('organizationController', function($scope) {
		$scope.message = 'This is a small list of the few teams(organizations) we have in the MCU';
	});

	marvelApp.controller('helpController', function($scope) {
		$scope.message = 'This place will be a list of things to lead you on your way of navigating and using the site';
		$scope.heading = "Documentation";
		$scope.content = "So, to start help you using my webApp, I would like to tell you quickly what it's all about";
	});

	marvelApp.controller('aboutController', function($scope) {
		$scope.message = 'Why did I create this?';
		$scope.heading = "My name is Oliver, and I love Marvel! I'm a huge fan of the MCU.";
		$scope.content = 'I created this webApp to help others understand what I think of the MCU';
		$scope.contact = 'My contact info is the following ......';
	});
