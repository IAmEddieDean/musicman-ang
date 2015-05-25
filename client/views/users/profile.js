angular.module('findify')
.controller('ProfileCtrl', function(User, $scope){
  User.getFavs()
  .then(function(response){
    console.log(response, 'hello');
  });
});
