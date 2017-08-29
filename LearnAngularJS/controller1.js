var kapilApp1 = angular.module("kapilModule1",[]);
kapilApp1.controller("controlleremp",function($scope){
 var employee = {
     firstName : 'Kapil',
     lastName : 'Kumar',
     gender : 'Male'
 };
$scope.employee = employee;

});
