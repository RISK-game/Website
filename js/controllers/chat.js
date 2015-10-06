/**
 * Chatt page
 */
risk.controller('chat', function($scope, $http, $state, API_URL, Flash) {
  // An array of error messages showed for the user
  $scope.errors = [];
  $scope.test = "It's alive";
  $scope.messages = [
    {name:'Filip',image:'http://www.able-sc.org/wp-content/uploads/all-about-me-boy.jpg'},
    {name:'David',image:'http://www.able-sc.org/wp-content/uploads/all-about-me-boy.jpg'},
    {name:'Hugo',image:'http://www.able-sc.org/wp-content/uploads/all-about-me-boy.jpg'},
    {name:'Ludvig',image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='}
  ];
});


