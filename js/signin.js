function signIn() {
    var email = document.getElementById("SignInEmail").value;
    var password = document.getElementById("SignInPassword").value;
    let obj = {
        email,
        password
    }
    // console.log(obj)
    firebase.auth().signInWithEmailAndPassword(obj.email, obj.password)
        .then(function (success) {
            console.log(success, 'Login hogaya')
            console.log(success.user.uid)
            var loginUID = success.user.uid;
            var err = document.getElementById('successMessage')
            err.innerHTML = 'Login Successfully'
            firebase.database().ref('/').child(`user/${loginUID}`).once('value', function (snap) {
                console.log(snap.val())
                var user = snap.val()
                localStorage.setItem('user', JSON.stringify(user));
                window.location.replace('pages/profile.html')  
            })  
        }
        )
      
        .catch(function (error) {
            console.error(error, 'Login nai hua')
            var err = document.getElementById('errorMessage')
            err.innerHTML = error.message
        })

   
}










