// front page
let LogInBtn = document.getElementById('login-btn')
LogInBtn.addEventListener('click', function(){
   let LoginInputEmail = document.getElementById('login-input-email')
   let LoginInputEmailValue = LoginInputEmail.value
   let loginInputPassword = document.getElementById('login-input-password');
   let loginInputPasswordValue = loginInputPassword.value
   
   if(LoginInputEmailValue === 'ashik162173@gmail.com' && loginInputPasswordValue === 'khadijatul1334'){
         window.location.href = "inside-bank.html";
   }else {
       alert("You are not Valid Users")
      
   }
   LoginInputEmail.value = '';
   loginInputPassword.value = '';
  
})
