var kapil_model_var1 = angular.module("kapil_module_e",[]);


kapil_model_var1.controller("kapil_controller_e", function($scope)
{
    var employee1_k =
    {
         firstName : "kapil",
         lastName  : "kumar",
         gender    : "male"
    };
   $scope.scope_employee = employee1_k;
});
