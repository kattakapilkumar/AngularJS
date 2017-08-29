var kapilApp = angular.module("kapilModule",[]);


var kapilController = function ($scope)
{
  $scope.kapilmessage = "kapil learningAngular don't disturb him";
}


kapilApp.controller("kapilController123",kapilController);   <!--  THE kapilController123 IS SHOULD BE SAME AS ng-controller IN THE HTML PAGE  like ng-kapilController123  -->
