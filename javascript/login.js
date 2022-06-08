// buttons
var signBtn = document.getElementById("signBtn");
var loginBtn = document.getElementById("loginBtn");

// hide password icons
var hide1 = document.getElementById("hide1");
var hide2 = document.getElementById("hide2");
var passwordIcon = document.getElementById("password-icon");
var passwordRegister = document.getElementById("passwordRegister-icon");
var inputPassword = document.getElementById("inputPassword");
var inputRegister = document.getElementById("inputPassword-register");
var popup = document.querySelector(".popup");

// email and register popup message
var emailInput = document.getElementById("emailInput");
var registerSection = document.getElementById("register-section");
var invalidEmail = document.getElementById("invalidEmail");
var createdAccount = document.getElementById("createdAccount");

// register input 
var fullName = document.getElementById("full_name");
var number = document.getElementById("number");
var address = document.getElementById("address");
var age = document.getElementById("age");
var email = document.getElementById("email");
var male = document.getElementById("male");
var female = document.getElementById("female");

/* register */
var createBtn = document.getElementById("createBtn");
var registerForm = document.getElementById("createAcount");

createBtn.addEventListener("click", function(){

  let data = new FormData(registerForm);
  axios({
      method: 'post',
      url: 'http://localhost/Mozato/php/register.php',
      data: data,
  })
  .then(function (response) { 
    if(response.data == "mess around"){
      createdAccount.style.display = "block";
    }
    else{
      console.log(response);
      window.location = "file:///C:/xampp/htdocs/Mozato/index.html";
    }
  }
  )
});
loginBtn.addEventListener("click", function(){
  let data = new FormData();
  data.append('email', emailInput.value);
  data.append('password', inputPassword.value);
  axios({
      method: 'post',
      url: 'http://localhost/Mozato/php/login.php',
      data: data,
  })
  .then(function (response) {
    if(emailInput.value == "" ||  inputPassword.value == "" || response.data["response"] == "User Not Found"){
      invalidEmail.style.display = "block";   
      //window.location = "file:///C:/xampp/htdocs/Mozato/index.html";
    }
    else{
    window.localStorage.setItem("user_id", response.data.user_id);
    window.location = "file:///C:/xampp/htdocs/Mozato/pages/home.html";
    }
    }
  ) 
});

// Adding Register Form

signBtn.addEventListener("click", function(){
    popup.style.display = "flex";
    console.log("Hello flex");
});

window.onclick = function(event) {
  console.log(event.target);
    if (event.target == registerSection) {
      popup.style.display = "none";
    }
}

// hide password login form
passwordIcon.addEventListener("click", function(){
  if(inputPassword.type === 'password'){
      inputPassword.type = "text";
      hide1.style.display = "block";
      hide2.style.display = "none";
    }
    else{
      inputPassword.type = "password";
      hide1.style.display = "none";
      hide2.style.display = "block";

    }
});

// hide password Register form
passwordRegister.addEventListener("click", function(){
  if(inputRegister.type === 'password'){
      inputRegister.type = "text";
      hide3.style.display = "block";
      hide4.style.display = "none";
    }
    else{
      inputRegister.type = "password";
      hide3.style.display = "none";
      hide4.style.display = "block";

    }
});

