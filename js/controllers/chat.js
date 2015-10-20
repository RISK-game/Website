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
    },
    {
      isMe: false,
      username: 'Filip',
      src:'http://www.7-themes.com/data_images/out/63/6987665-cool-lion-pictures.jpg'
    }
  ];

  $scope.colors = ['1abc9c', '16a085', 'f1c40f', 'f39c12', '2ecc71', '27ae60', 'e67e22', 'd35400', '3498db', '2980b9', 'e74c3c', 'c0392b', 'ffffff', '9b59b6', '8e44ad', 'bdc3c7', '34495e', '2c3e50', '95a5a6', '7f8c8d'];

  $scope.thisColor = function(color){
    console.log(color);
  };

  $scope.pencilSize = 10;

  $scope.deltaPencil = function(delta){
    $scope.pencilSize += delta;
    if ($scope.pencilSize < 0) $scope.pencilSize = 0;
    console.log($scope.pencilSize);
  };

  $scope.openDrawArea = function(){
    $('.message-board').addClass('hidden-under-nnt');
    $('.chat-controlls').removeClass('hidden-under-nnt');
  };

  $scope.closeDrawArea = function(){
    $('.message-board').removeClass('hidden-under-nnt');
    $('.chat-controlls').addClass('hidden-under-nnt');
  };

  $scope.send = function(){
    console.log('Sending data');
  };

});


