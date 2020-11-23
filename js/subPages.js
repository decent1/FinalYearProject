var subPages = document.getElementById('subPages')
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log( localStorage.getItem("user"))
        var dataFromLocalStorage = localStorage.getItem("user")
        console.log('User from local Storage', JSON.parse(dataFromLocalStorage));
        var signInData = JSON.parse(dataFromLocalStorage)
                    registerLogin.innerHTML = `<div class="dropright">
                    <span class="dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     ${signInData.firstName}${" "}${signInData.lastName}
                    </span>
                    <div class="dropdown-menu bellIcon">
                    <a class="dropdown-item" onclick="signOut()" href="#">Logout</a>
                    <a class="dropdown-item" href="#" onclick="profileChange()" >Profile</a>
                    </div>
                  </div>`;
                   uroosaModal.id = 'HideModal';
                   userCheckOut.innerHTML=`<a class="nav-link" href="../pages/checkOut.html"><i class="fa fa-shopping-cart fa-3x checkOut  "  aria-hidden="true"></i></a>`
                   subPages.innerHTML=`<a class="nav-link" href="../pages/adminPanel.html"><i class="fa fa-upload upload " aria-hidden="true"></i></a>`
    } else {
        registerLogin.innerHTML = "Register/Login";
      
        
     

    }
});