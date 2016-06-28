var cpolicy app=angular.module("cpolicy",[])
cpolicy.controller("changepolicy",function($scope){
    $scope.details=[
    {  "Subject":"",
      "Resource":"",
      "Person":""}
    ];
    $scope.addRow=function(){
      $scope.details.push({"Subject":$scope.Subject,"Resource":$scope.Resource,"Person":$scope.Person});
      $scope.Subject='';
      $scope.Resource='';
      $scope.Person='';
  };
});
