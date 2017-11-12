app.config(function($routeProvider){
    $routeProvider
        .when("/",{
            templateUrl: "views/home.html",
            controller: "userTableCtrl"

        })
        .when("/user",{
            templateUrl: "views/user.html",
            controller: "userCtrl"
        })
        .when("/adduser",{
            templateUrl: "views/adduser.html",
            controller: "addUserCtrl"
        });
        
    
});