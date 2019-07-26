$(function () {
var form=$('#create');
var formData = $(form).serialize();
$.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData, 
    datatype: "json"
})
.done(function (data) {
        self.responseData("User is Successfully " + data);
}).error(function (err) {
        self.responseData("Error " + err.status);
});
});


//for login and jwt token

$(document).ready(function(){
    $('#form').submit(function(){
        // e.preventDefault();
        var myemail = $('#emailid').val();
        var mypassword=$('#passwordid').val();
        $.ajax({
            global: false,
            type: "post",
            url:'/user/login',
            dataType: "json",
            data:{
                email:myemail,
                password:mypassword
            },

            success:function(res){
                alert("success");
            },error:function(err){
                alert("error");
            }
        });
        return false;
    })
})
