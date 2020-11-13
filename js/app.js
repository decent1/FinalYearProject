

var registerLogin = document.getElementById('registerLogin');
var uroosaModal = document.getElementById("uroosaModal");
var userCheckOut = document.getElementById("userCheckOut");
var upload = document.getElementById('upload');
var subPages= document.getElementById('subPages')

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
                   userCheckOut.innerHTML=`<a class="nav-link" href="pages/checkOut.html"><i class="fa fa-shopping-cart fa-3x checkOut  "  aria-hidden="true"></i></a>`
                   upload.innerHTML=`<a class="nav-link" href="pages/adminPanel.html"><i class="fa fa-upload upload " aria-hidden="true"></i></a>`
                   subPages.innerHTML=`<a class="nav-link" href="adminPanel.html"><i class="fa fa-upload upload " aria-hidden="true"></i></a>`
    } else {
        registerLogin.innerHTML = "Register/Login";
      
        
     

    }
});

function signUp() {
    var firstName = document.getElementById("signUpFirstName").value;
    var email = document.getElementById("signUpEmail").value;
    var password = document.getElementById("password").value;
    var addres = document.getElementById("signUpAddress").value;
    var contact = document.getElementById("signUpMobile").value;
    var city = document.getElementById("signUpCity").value;
    // var code = document.getElementById("SignUpPostalCode").value;
    var lastName = document.getElementById("signUpLastName").value;
    // var personalInformation = document.getElementById("personalInformation").value;

    let obj = {
        firstName,
        lastName,
        email,
        password,
        addres,
        contact,
        city,
        // code,
        // personalInformation

    }

    console.log(obj)
    firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password)
        .then(function (success) {
            console.log(success.user.uid)
            obj.uid = success.user.uid
            console.log(obj)
            firebase.database().ref('/').child(`user/${obj.uid}`).set(obj).then(function (suc) {
                console.log(suc, 'data send successfully')
                var err = document.getElementById('SignUpSuccessMessage')
                err.innerHTML = 'Login Successfully'
                window.location.replace('index.html')


            }).catch(function (error) {
                console.error(error, 'database main nai gaya')
            })
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            var err = document.getElementById('signUpErrorMessage')
            err.innerHTML = error.message
            console.error(error)
            // ...
        });
}

/////profileChange function
 function profileChange(){
     window.location.assign("pages/profile.html")
 }