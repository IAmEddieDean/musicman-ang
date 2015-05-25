'use strict';

angular.module('findify')
.factory('User', function($rootScope, $http, nodeUrl){
  function User(){
  }
  
  User.getMe = function(){
    return $http.get('https://api.spotify.com/v1/me');
  };
  User.getFavs = function(){
    return $http.put('https://api.spotify.com/v1/me/following?type=artist');
  };

  User.initialize = function(){
    return $http.post(nodeUrl + '/users');
  };

  return User;
});
