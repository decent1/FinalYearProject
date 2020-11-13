function signOut(){
  firebase.auth().signOut()
  localStorage.removeItem('user')
    window.location.reload()
}




// function onFirebaseStateChanged(){
//     firebase.auth().onAuthStateChanged(onStateChanged)  
   
// }

// var registerLogin = document.getElementById('registerLogin');

// function onStateChanged(user){
//   if (user) {
//     var loginUID = user.uid;
//     firebase.database().ref('/').child(`user/${loginUID}`).once('value', function (snap){
//       // console.log(snap.val());
//       var user = snap.val()
//       // console.log(user.firstName)  
//       localStorage.setItem('user', JSON.stringify(user))
//       registerLogin.innerHTML= user.firstName + " " + user.lastName  ;
//     });
   
//     } 
//         else {
//           registerLogin.innerHTML="Register/Login"
//    alert("Welcome in Cash And Carry ")
     
//     }
// }

// onFirebaseStateChanged()






