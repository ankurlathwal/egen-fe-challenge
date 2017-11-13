app.controller("userTableCtrl",function($scope, $http,$location,userService,messageService){
    $http.get("http://mocker.egen.io/users").then(function(response){
        $scope.data = response.data;
        $scope.view = function(user){
            userService.setCurrentUser(user);
            $location.path("/user");
        }
    },function(error){
        messageService.setCurrentMessage("An error occurred: " + error.statusText);
        $location.path("/notify"); 
    });
    $scope.orderByFilter = function(x){
        $scope.orderByProperty = x;
    };
});

app.controller("userCtrl",function($scope,userService,$http,$location,messageService){
    $scope.user = userService.getCurrentUser();
    $scope.deleteUser = function(){
        $http.delete("http://mocker.egen.io/users/" + $scope.user.id).then(function(response){
            console.log(response.statusText);
            messageService.setCurrentMessage("User deleted successfully");             
            $location.path("/notify");
        },function(error){
            messageService.setCurrentMessage("An error occurred: " + error.statusText); 
            $location.path("/notify");            
        });
    };
});

app.controller("addUserCtrl",function($scope,$http,$location,messageService){
    $scope.submit = function(){
        var data = $scope.fields;
        console.log(data);
        data.profilePic = "images/avatar.png";
        $http.post("http://mocker.egen.io/users",data).then(function(response){
            console.log("POST response :" + response.statusText);
            messageService.setCurrentMessage("User added successfully");             
            $location.path("/notify");
        },function(error){
            messageService.setCurrentMessage("An error occurred: " + error.statusText); 
            $location.path("/notify");            
        });
    };
});

app.controller("notifyCtrl",function($scope,$http,$location,messageService){
    $scope.message = messageService.getCurrentMessage();
});