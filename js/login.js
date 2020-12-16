document.getElementById("userSubmit").addEventListener('click',function(){
        var getUsername = document.getElementById("username").value;
        localStorage.setItem("username",getUsername);
        window.location.href = "welcome.html";
});