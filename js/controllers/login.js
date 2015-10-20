risk.controller('login', function($scope, $http, $state, API_URL, Flash) {
  $scope.errors = [];

  /**
   * Called when the user presses the login button
   */
  $scope.submit = function() {
    $http
      .post(API_URL + '/acc/login/', $scope.form)
      .then(function(resp) {
        $scope.errors = [];

        Flash.set('loginSuccessful', 'Correct username and password');

        $state.go('index', {}, {reload: true});
      })
      .catch(function(resp) {
        console.log(resp);

        $scope.errors = resp.data.messages;
      });
  };
});
