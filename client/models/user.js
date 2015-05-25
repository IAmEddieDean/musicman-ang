'use strict';

angular.module('findify')
.factory('User', function($rootScope, $http, nodeUrl){
  function User(){
  }
  // var spotId = $rootScope.activeUser.id;
  User.getMe = function(){
    return $http.get('https://api.spotify.com/v1/me');
  };
  // User.getFavs = function(){
  //     return $http.get('https://api.spotify.com/v1/users/'+ $rootScope.activeUser.id + '/playlists');
  // };
  User.getFavs = function(){
      return $http.get('https://api.spotify.com/v1/me/tracks');
  };

  User.initialize = function(){
    return $http.post(nodeUrl + '/users');
  };
  User.find = function(id){
    return $http.get(nodeUrl + '/users/' + id);
  };

  return User;
});
