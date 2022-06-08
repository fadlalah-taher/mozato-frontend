var myNav = document.getElementById("myNav");
var icon = document.getElementById("span-icon");
var usersContainer = document.getElementById("users-container")

window.onload = (function(){
    axios({
        method: 'post',
        url: 'http://localhost/Mozato/php/users.php',
    })
    .then(function (response) {
        let users = response.data;
        usersContainer.innerHTML = ""; 
        users.forEach(user => {
            let userHtml = `
            <div class="container">
                <div class="right">
                    <div class="info">
                        <h3>${user.full_name}</h3>
                        <div class="info_data">
                            <div class="data">
                                <h4>Email</h4>
                                <p>${user.email}</p>
                            </div>
                            <div class="data">
                            <h4>Phone</h4>
                                <p>${user.phone_number}</p>
                        </div>
                        </div>
                    </div>
                
                <div class="projects">
                        <h3></h3>
                        <div class="projects_data">
                            <div class="data">
                                <h4>Address</h4>
                                <p>${user.address}</p>
                            </div>
                            <div class="data">
                                <h4>Age</h4>
                                    <p>${user.age}</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>`;
            usersContainer.innerHTML +=userHtml;
        })
        console.log(response);
        }
    )
})

console.log("helo");
icon.addEventListener("click", function(){
    myNav.style.width = "100%";
});
myNav.addEventListener("click", function(){
    myNav.style.width = "0%";
});

