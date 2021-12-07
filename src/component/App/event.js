
document.addEventListener("DOMContentLoaded", function() {
    var signup = document.getElementById('signUp');
    var login = document.getElementById('popup-login');
    var blurContainer = document.getElementById('blur-pannel');
    if(signup != null)
        signup.addEventListener('click',function(){
            login.classList.add('popup-login');
            login.classList.remove('popup-login-hide');
            blurContainer.classList.add('blur-pannel-active');
            blurContainer.classList.remove('blur-pannel');
        });
    var close = document.getElementById('close-login');
    if(close != null)
        close.addEventListener('click',function(){
            login.classList.remove('popup-login');
            login.classList.add('popup-login-hide');
            blurContainer.classList.remove('blur-pannel-active');
            blurContainer.classList.add('blur-pannel');
        });
});

