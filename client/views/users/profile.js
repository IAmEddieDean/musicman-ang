angular.module('findify')
.controller('ProfileCtrl', function(User, $scope){
//   setTimeout(
//   User.getFavs()
//   .then(function(response){
//     console.log(response, 'hello');
//   });
// ){}
setInterval(function(){
  User.getFavs()
  .then(function(response){
    console.log(response, 'hello');
  });
}, 10000);
});
