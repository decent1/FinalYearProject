let cart = []
function addtoCart(e) {
    let image = e.parentElement.parentElement.parentElement.children[0].getAttribute('src')
    let price = e.parentElement.parentElement.children[0].innerText
    let name = e.parentElement.parentElement.children[1].innerText
    let productCode = e.parentElement.parentElement.children[2].value
    let category = e.parentElement.parentElement.children[3].value
   let key = firebase.database().ref("cartItems").push().key
    let itemIndex = cart.findIndex(obj => obj.productCode == productCode && obj.category == category);
    if (itemIndex == -1) {
        let currentItem = {
            name,
            price,
            image,
            productCode,
            category,
            key
        }
        cart.push(currentItem)
        // localStorage.setItem("cart_items", JSON.stringify(cart))
        // let store = localStorage.getItem("cart_items")
        // console.log(JSON.parse(store))
        showAddedMessage()
        $('#cartLength').text(`${cart.length}`)
    }

}
function removeItem(index) {
    cart.splice(index, 1)
    localStorage.setItem("cart_items", JSON.stringify(cart))
    reload()
    $('#cartLength').text(`${cart.length}`)  
}

function showAddedMessage() {
    $('#message').css({ bottom: '0' })
    setTimeout(function () {
        $('#message').css({ bottom: '-100%' })
    }, 2000)
}



