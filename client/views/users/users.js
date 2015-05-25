'use strict';

angular.module('findify')
.controller('UsersCtrl', function($scope, $state, $window, User, $auth, $rootScope, $http){
  $scope.name = $state.current.name;

  $scope.oauth = function(provider){
    $auth.authenticate('spotify')
    .then(function(response){
      $http.defaults.headers.common.Authorization = 'Bearer ' + $auth.getToken();
      User.getMe()

      .then(function(res){
        $rootScope.activeUser = res.data;
        $rootScope.displayName = res.data.display_name;
        console.log(res);

        User.initialize(res)
        .then(function(resp){
          console.log(resp);
          $state.go('profile');
        });
      });
    }).catch(function(){
      $window.swal({title: 'Login Error', text: 'There was a problem with your login. Please try again.', type: 'error'});
    });
  };
});
