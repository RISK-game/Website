var risk = angular.module('risk', ['ui.router']);


risk.config(function($stateProvider, $urlRouterProvider) {
  // This is our 404 page
  $urlRouterProvider.otherwise('/');


  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'views/index.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html'
    })
    .state('stats', {
      url: '/stats',
      templateUrl: 'views/stats.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
    });
});


risk.controller('testSwag', function($scope) {
  $scope.list = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});