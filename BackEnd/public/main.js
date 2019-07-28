//for signup
$(document).ready(function(){
    $('#create').submit(function(){
        var mytitle = $('#titleid').val();
        var myemail = $('#emailid').val();
        var mypassword=$('#passwordid').val();
        var myaddress = $('#addressid').val();
        var myphone = $('#phoneid').val();
        $.ajax({
            global: false,
            type: "post",
            url:'/create-hospital/create',
            dataType: "json",
            data:{
                title:mytitle,
                email:myemail,
                password:mypassword,
                address:myaddress,
                phone:myphone

            },

            success:function(res){
                alert("Account created successfuly ");
                if ( res.status === 'success'){
                    window.location = res.redirect
                } 
                       },
            error:function(err){
                alert("error");
            }
        });
        return false;
    })
})



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
            
            data:{
                email:myemail,
                password:mypassword
            },

            success:function(res){
                alert("success");
                localStorage.setItem("data", res.accessToken);
                var Token = localStorage.getItem('data');
                document.getElementById("#btn").addEventListener("click", getMe);
            },error:function(err){
                alert("error");
            }
        });
        return false;
    })
    
})




function getMe(e) {
    e.preventDefault();
    var Token = JSON.parse(localStorage.getItem('data'));
    console.log(`Authorization=Bearer ${Token}`)
    $.ajax({
         url:'/superadmin/superadmin', 
         type: 'GET',
        headers: {
            'Authorization': 'Bearer ' + Token
        },
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
             window.location.href = '/superadmin/superadmin';
        })
        .catch(err => { console.log(err) })
} 







// $.ajax({
//     url: "/superadmin/superadmin",
//     type: 'GET',
//     // Fetch the stored token from localStorage and set in the header
//     headers: { "Authorization": 'Bearer ' + Token }
//   });

    




 

