'use strict';

angular.module('findify')
.controller('NavCtrl', function($rootScope, $scope, $http, $auth){
  function goHome(){
    $state.go('home');
  }

  $scope.logout = function(){
    $auth.removeToken();
    $rootScope.activeUser = null;
    $rootScope.displayName = null;
    $http.defaults.headers.common.Authorization = null;
    goHome();
  };
});
