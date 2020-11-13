
function contactUs() {
    var email = document.getElementById("contactName").value;
    var password = document.getElementById("contactEmail").value;
    var message = document.getElementById("contactTextArea").value;

    if (email === '' || email === ' ') {
        return 
    } else {
        let obj = {
            email,
            password,
            message

        }
        console.log(obj)
        firebase.database().ref("/").child("messages/").push(obj)
        .then(function(success){
            var err = document.getElementById('successMessage')
            err.innerHTML = 'Send message Successfully'
        })
        .catch(function(err){
            var err = document.getElementById('errorMessage')
            err.innerHTML = error.message
        });
    }

}
