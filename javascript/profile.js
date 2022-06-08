var myNav = document.getElementById("myNav");
var icon = document.getElementById("span-icon");
var profilePassword = document.getElementById("profilePassword-icon");
var inputPassword = document.getElementById("inputPassword");
var hide1 = document.getElementById("hide1");
var hide2 = document.getElementById("hide2");
var profileForm = document.getElementById("profile-container");
var doneBtn = document.getElementById("doneBtn");
var editForm = document.getElementById("editProfile");
var profileHeader = document.getElementById("header-profile");

// input fields
var fullName = document.getElementById("name");
var age = document.getElementById("age");
var address = document.getElementById("address");
var phoneNumber = document.getElementById("phonenumber");
var email = document.getElementById("email");
var inputPasswordprofile = document.getElementById("inputPassword");

// Burger menu
icon.addEventListener("click", function(){
    myNav.style.width = "100%";
});
myNav.addEventListener("click", function(){
    myNav.style.width = "0%";
});

// unhidden password
profilePassword.addEventListener("click", function(){
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

doneBtn.addEventListener("click", function(){
  let data = new FormData(editForm);
 
  data.append('user_id', window.localStorage.getItem("user_id"));
  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/update_pro/',
      data: data,
  })
  .then(function (response) {
    // checking if response > die or updated successfully
    if(response.data == "mess around"){
      profileHeader.innerHTML = "Fill the fields below"; // message appear when a field is still empty
    }else{
      profileHeader.innerHTML = "Updated Successfully"; // message appear when updated

      //clear fields
      age.value = '';
      email.value = '';
      fullName.value = '';
      inputPassword.value = '';
      phoneNumber.value = '';
      address.value = '';
    }
  }
  )
});
