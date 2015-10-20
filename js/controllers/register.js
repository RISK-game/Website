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

      $state.go('index');
    }).catch(function(resp) {
      // Some kind of error, often validation error
      console.error(resp.data);

      $scope.errors = resp.data.messages;
    });
  };
});
