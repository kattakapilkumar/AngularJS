var kapil_model_var_ng = angular
.module("kapil_module_ng_src",[]);
.controller("kapil_controller_e_ng_src", function($scope)
{
    var country =
    {
      name : "USA",
      capital : "Washington, D.C",
      flag : "C:\Users\kattakak\Desktop\GitHub\AngularJS\Images\America.png"
    };
    $scope.scope_country = country;
});
