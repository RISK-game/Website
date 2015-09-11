var risk = angular.module('risk', ['ui.router']);


/**
 * Config constants
 */
risk.constant('API_URL', 'http://127.0.0.1:3000');


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


risk.controller('register', function($scope, $http, API_URL) {
  $scope.errors = [];

  $scope.submit = function() {
    // TODO: Validation
    console.log($scope.form);
    console.log(API_URL);

    $http({
      method: 'POST',
      url: API_URL + '/acc/register',
      data: $scope.form
    }).then(function(resp) {
      console.log(resp);
      $scope.errors = [];

    }).catch(function(resp) {
      console.error(resp.data);
      $scope.errors = resp.data.errorMessages;
    });

  }
});