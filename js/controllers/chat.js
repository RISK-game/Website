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
  $scope.pencilSize = 10;
  $scope.color = "#000";

  /**
   * Called when this controller is initalzied
   */
  function constructor() {
    drawInCanvas();
  }
  constructor();


  $scope.setColor = function(color){
    console.log(color);
    $scope.color = '#'+color;
  };

  $scope.deltaPencil = function(delta){
    $scope.pencilSize += delta;
    if ($scope.pencilSize < 0) $scope.pencilSize = 0;
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

  /**
   * Draw functonalityg 
   */
  function drawInCanvas() {
    var canvas = document.getElementById("draw-canvas"),
        ctx = canvas.getContext("2d"),
        isDrawing = false;

    // Draw
    canvas.addEventListener("mousemove", draw, false);
    canvas.addEventListener("touchmove", function(e) { e.preventDefault(); draw(e); }, false);
    canvas.addEventListener("mousedown", startDrawing, false);
    canvas.addEventListener("touchstart", startDrawing, false);
    canvas.addEventListener("mouseup", endDrawing, false);
    canvas.addEventListener("touchup", endDrawing, false);

    function draw(e) {
      if(isDrawing) {
          circle(getMouse(e).x, getMouse(e).y, $scope.pencilSize, $scope.color);
        }
    }

    function startDrawing(e) {
        isDrawing = true;
        circle(getMouse(e).x, getMouse(e).y, $scope.pencilSize, $scope.color);
    }

    function endDrawing(e) {
        isDrawing = false;
    }

    
      
    /**
     * Get mouse coordinates relative to the canvas
     */
    function getMouse(e) {
        var rect = canvas.getBoundingClientRect();
        var x, y;

        if(typeof e.clientX == 'undefined') {
          x = event.touches[0].pageX;
          y = event.touches[0].pageY;
        }
        else {
          x = e.clientX;
          y = e.clientY;
        }

        currX = x - rect.left;
        currY = y - rect.top;

        console.log(currX, currY);

        return {x: currX, y: currY};
    }

    /** 
     * Draw a circle in the canvas
     */
    function circle(x, y, size, color) {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, 2 * Math.PI, false);
      ctx.fillStyle = color;
      ctx.fill();
    }
  };



});


