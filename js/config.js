/**
 * Constants
 */
risk.constant('API_URL', 'http://127.0.0.1:3000');


risk.config(function($stateProvider, $urlRouterProvider) {

  /**
   * URL routing
   */

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
    })
    .state('chat',{
      url:'/chat',
      templateUrl:'views/chat.html'
    });
});
