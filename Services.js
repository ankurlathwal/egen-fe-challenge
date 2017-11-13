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

app.service('messageService',function(){
    var message = "";
    var setCurrentMessage = function(messageCurrent){
        message = messageCurrent;
    };
    var getCurrentMessage = function(){
        return message;
    };
    return {
        setCurrentMessage: setCurrentMessage,
        getCurrentMessage: getCurrentMessage
      };
});