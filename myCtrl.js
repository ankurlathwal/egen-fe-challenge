app.controller("myCtrl",function($scope, $http){
    $http.get("http://mocker.egen.io/users").then(function(response){
        $scope.data = response.data;
    });
});