var app = angular.module("richMan");

app.controller("ctrlView",function($scope, $http){

  $http({
    method:"GET",
    url:"https://www.reddit.com/r/awww/.json"
  }).then(function successCallBack(response){
    $scope.redditInfo = response.data.data.children;
    // $scope.redditInfo= response.data.data.imgSource.img;
    console.log($scope.redditInfo);
  }, function errorCallBack(response){
    $scope.redditInfo = response.statusText;
  });

});
