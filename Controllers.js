app.controller("userTableCtrl",function($scope, $http,$location,userService){
    $http.get("http://mocker.egen.io/users").then(function(response){
        $scope.data = response.data;
        $scope.view = function(user){
            userService.setCurrentUser(user);
            $location.path("/user");
        }
    });
});

app.controller("userCtrl",function($scope,userService,$http,$location){
    $scope.user = userService.getCurrentUser();
    $scope.deleteUser = function(){
        $http.delete("http://mocker.egen.io/users/" + $scope.user.id).then(function(response){
            console.log(response.statusText);
            $location.path("/");
        });
    };
});

app.controller("addUserCtrl",function($scope,$http,$location){
    $scope.submit = function(){
        var data = $scope.fields;
        console.log(data);
        data.profilePic = "images/avatar.png";
        $http.post("http://mocker.egen.io/users",data).then(function(response){
            console.log("POST response :" + response.statusText);
                $location.path("/");
        });
    };
});