app.controller("userTableCtrl",function($scope, $http,$location,userService){
    $http.get("http://mocker.egen.io/users").then(function(response){
        $scope.data = response.data;
        $scope.view = function(user){
            userService.setCurrentUser(user);
            $location.path("/user");
        }
    });
});

app.controller("userCtrl",function($scope,userService){
    $scope.user = userService.getCurrentUser();
});

app.controller("addUserCtrl",function($scope,$http){
    $scope.submit = function(){
        var data = $scope.fields;
        console.log(data);
        $http.post("http://mocker.egen.io/users",data).then(function(response){
            console.log("POST response :" + response.statusText);
            
        });
    };
});