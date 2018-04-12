$(function () { 
    $('.login-btn').on('click',function(){
        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();
        console.log(username, ':',password);
        $.ajax({
            url:'http://localhost:3000/userlogin',
            type:'post',
            data:{
                username:username,
                password:password
            },
            success:function (data) {
                
            },
            error:function(error){
                console.error(error);
            }
        })
    })
});