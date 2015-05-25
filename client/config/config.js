'use strict';

angular.module('findify')
.config(function($stateProvider, $urlRouterProvider, SpotifyProvider, $authProvider){

  var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
  
var state = generateRandomString(16);
var scope = 'user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public';

var clientId = 'cb95aa216fe74c4d8231fa9fe432c364';


// $authProvider.storage = 'localStorage';
$authProvider.oauth2({
  name: 'spotify',
  state: state,
  scope: scope,
  url: '/auth/spotify',
  redirectUri: 'http://localhost:3000/callback',
  clientId: clientId,
  responseType: 'token',
  authorizationEndpoint: 'https://accounts.spotify.com/authorize'
});

  
  SpotifyProvider.setClientId(clientId);
  SpotifyProvider.setRedirectUri('http://localhost:3000');
  SpotifyProvider.setScope(scope);
  

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('about', {url: '/about', templateUrl: '/views/general/about.html'})
  .state('profile', {url: '/profile', templateUrl: '/views/users/profile.html', controller: 'ProfileCtrl'})
  .state('music', {url: '/music', templateUrl: '/views/music/music.html', abstract: true, controller: 'MusicCtrl'})
  .state('music.suggestions', {url: 'music/suggestions', templateUrl: '/views/music/suggestions.html', controller: 'MusicCtrl'})
  .state('music.favorites', {url: 'music/favorites', templateUrl: '/views/music/favorites.html', controller: 'MusicCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'});
});
