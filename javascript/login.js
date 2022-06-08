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

createBtn.addEventListener("click", function(){
  let data = new FormData(registerForm);
  /*let _data = {
    full_Name: fullName,
    email:email,
    password:inputRegister,
    phone_number:number,
    address : address,
    age:age,
    gender:male,
  }*/

  fetch('http://127.0.0.1:8000/api/add_user',{
    Method:"POST",
    body:JSON.stringify(data),
    headers:{"Content-type":"application/json; charset=UTF-9"}
  })
  .then(response=>response.json())
  .then(json=>console.log(json))
  .catch(err=>console.log(err));
});
 
  
loginBtn.addEventListener("click", function(){
  // let data = new FormData();
  // data.append('email', emailInput.value);
  // data.append('password', inputPassword.value);
  console.log(emailInput.value);
  console.log(inputPassword.value);
  let _data = {
    email:emailInput.value,
    password :inputPassword.value
  }
  fetch('http://127.0.0.1:8000/api/login',{
    Method:"POST",
    body:JSON.stringify(_data),
    headers:{"Content-type":"application/json; charset=UTF-9"}
  })
  .then(response=>response.json())
  .then(json=>console.log(json))
  .catch(err=>console.log(err));
  
  
  /*axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/login',
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
  ) */
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

