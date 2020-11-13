function placeOrder() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
           
            localStorage.setItem("cart_items", JSON.stringify(cart))
            let store = localStorage.getItem("cart_items")
            firebase.database().ref('/').child(`user/${user.uid}/cartItems`).set(store)
            console.log(JSON.parse(store))
            console.log(user.uid)
        } else {
            // No user is signed in.
        }
    });
}