'use strict';

angular.module('findify')
.factory('User', function($rootScope, $http, nodeUrl){
  function User(){
  }
  
  User.getMe = function(){
    return $http.get('https://api.spotify.com/v1/me')
  }

  User.initialize = function(){
    return $http.post(nodeUrl + '/users');
  };

  User.oauth = function(provider){
    return $rootScope.afAuth.$authWithOAuthPopup(provider);
  };

  User.register = function(user){
    return $rootScope.afAuth.$createUser(user);
  };

  User.login = function(user){
    return $rootScope.afAuth.$authWithPassword(user);
  };

  User.logout = function(){
    return $rootScope.afAuth.$unauth();
  };

  return User;
});
