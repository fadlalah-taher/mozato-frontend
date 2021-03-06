var myNav = document.getElementById("myNav");
var icon = document.getElementById("span-icon");
var usersContainer = document.getElementById("users-container")

let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

window.onload = (function(){
    
    fetch('http://127.0.0.1:8000/api/all_users',{
        headers:{"Content-type":"application/json; charset=UTF-9"},
        method:'GET',
        credentials:"same-origin"
    })
    .then(response =>
        response.json().then(data =>({
            data:data,
            status: response.status
        })
        )).then(user =>{
            // if(user.data['success']){

            // }
            let users = response.data;
            usersContainer.innerHTML = "";
        for(var i in users){
            let users = response.data;
            usersContainer.innerHTML = ""; 
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

        }

        })
    })
    
    /*
    axios({
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/all_users',
    })
    .then(function (response) {
        let users = response.data;
        usersContainer.innerHTML = ""; 
        Object.keys(users).forEach(user => {
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
})*/


icon.addEventListener("click", function(){
    myNav.style.width = "100%";
});
myNav.addEventListener("click", function(){
    myNav.style.width = "0%";
});

