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




/**
 * Factories
 */

/**
 * Flash messages
 *
 * Example:
 *    Flash.set('success', 'whoohoo')  => null
 *    Flash.isset('success')           => true
 *    Flash.get('success')             => whoohoo
 *    Flash.isset('success')           => false
 *    Flash.get('success')             => undefined
 */
risk.factory('Flash', function() {
  var flashMessages = {};
  var randomNum = Math.random();

  return {
    set : function(key, val) {
      flashMessages[key] = val;
    },

    get : function(key) {
      var msg = flashMessages[key];
      console.log(msg);
      delete flashMessages[key];

      return msg;
    },

    isset : function(key) {
      return (key in flashMessages);
    },

    randomNum : function() {
      return randomNum;
    }
  }
});


/**
 * Index page
 */
risk.controller('index', function($scope, Flash) {
  // You can't use the Flash object/factory/service directly in the view because the view
  // call each Flash function 4 times for some reason. So Flash.get() won't work because the
  // value will be deleted the first time angular call Flash.get().
  $scope.isFlashSet = Flash.isset('registerSuccessful');
  $scope.flashValue = Flash.get('registerSuccessful');
});

/**
 * Register page
 */
risk.controller('register', function($scope, $http, $state, API_URL, Flash) {
  // An array of error messages showed for the user
  $scope.errors = [];

  /**
   * Called when a user presses the submit button
   */
  $scope.submit = function() {
    $http({
      method: 'POST',
      url: API_URL + '/acc/register',
      data: $scope.form
    }).then(function(resp) {
      // Success, the user i created
      console.log(resp);
      $scope.errors = [];

      Flash.set('registerSuccessful', 'Your account is now registered, you can now login.');
      console.log(Flash.randomNum());

      $state.go('index');
    }).catch(function(resp) {
      // Some kind of error, often validation error
      console.error(resp.data);

      $scope.errors = resp.data.errorMessages;
    });
  }
});