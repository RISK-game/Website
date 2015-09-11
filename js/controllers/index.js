/**
 * Index page
 */
risk.controller('index', function($scope, Flash) {
  // You can't use the Flash object/factory/service directly in the view because the view
  // call each Flash function 4 times for some reason. So Flash.get() won't work because the
  // value will be deleted the first time angular call Flash.get().
  $scope.isFlashSet = Flash.isset('registerSuccessful') || Flash.isset('loginSuccessful');
  $scope.flashValue = Flash.get('registerSuccessful') || Flash.get('loginSuccessful');
});