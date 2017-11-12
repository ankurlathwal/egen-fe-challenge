app.service('userService',function(){
    var user = {};
    var setCurrentUser = function(userCurrent){
        user = userCurrent;
    };
    var getCurrentUser = function(){
        return user;
    };
    return {
        setCurrentUser: setCurrentUser,
        getCurrentUser: getCurrentUser
      };
});