/**
 * Chatt page
 */
risk.controller('chat', function($scope, $http, $state, API_URL, Flash) {
  // An array of error messages showed for the user
  $scope.errors = [];
  $scope.test = "It's alive";
  $scope.messages = [
    {
      isMe: true,
      username: 'Filip',
      src:'http://www.7-themes.com/data_images/out/63/6987665-cool-lion-pictures.jpg'
    },
    {
      isMe: false,
      username: 'Filip',
      src:'http://www.7-themes.com/data_images/out/63/6987665-cool-lion-pictures.jpg'
    }
  ];
});


