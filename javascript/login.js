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
var fullName = document.getElementById("full_name").value;
var number = document.getElementById("number").value;
var address = document.getElementById("address").value;
var age = document.getElementById("age").value;
var email = document.getElementById("email").value;
var male = document.getElementById("male").value;
var female = document.getElementById("female").value;

/* register */
var createBtn = document.getElementById("createBtn");
var registerForm = document.getElementById("createAcount");
let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
createBtn.addEventListener("click", function(){
  let data = new FormData(registerForm);
  let _data = {
    full_Name: fullName,
    email:email,
    password:inputRegister,
    phone_number:number,
    address : address,
    age:age,
    gender:male,
    user_role:0
  }

  fetch('http://127.0.0.1:8000/api/add_user',{
    method:"POST",
    body:JSON.stringify(_data),
    headers:{"Content-type":"application/json; charset=UTF-9","Accept": "application/json, text-plain, /",
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRF-TOKEN": token}
  })
  .then(response=>response.json())
  .then(json=>console.log(json))
  .catch(err=>console.log(err));
});

loginBtn.addEventListener("click", function(){

  let _data = {
    email:emailInput.value,
    password :inputPassword.value
  }

  fetch('http://127.0.0.1:8000/api/login',{
    method:"POST",
    body:JSON.stringify(_data),
    headers:{"Content-type":"application/json; charset=UTF-9"}
  })
  .then(response=>response.json())
  .then(window.location= "file:///C:/Users/Fadel/Desktop/Mozato_frontend/pages/home.html")
  // .then(json=>console.log(json))
  .catch(err=>console.log(err));

  
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

