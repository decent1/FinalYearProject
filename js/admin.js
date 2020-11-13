
function productUpload() {
var productName = document.getElementById("productName").value;
var Category = document.getElementById("Category").value;
var ProductCode = document.getElementById("ProductCode").value;
var Price = document.getElementById("Price").value;
var Description = document.getElementById("Description").value;
    var key = firebase.database().ref("Product_Detail").push().key
    let productDetail = {
        productName,
        Category,
        ProductCode,
        Price,
        Description,
        key
    }
    console.log(productDetail)
    firebase.database().ref("Product_Detail/").child(key).set(productDetail).then(function (successfully) {
        console.log(successfully, 'data send successfully');
        var err = document.getElementById('successMessage');
        err.innerHTML = 'data send successfully';
        window.location.reload()

    }).catch(function (error) {
        console.error(error, 'Not send successfully')
        var err = document.getElementById('successMessage')
        err.innerHTML = 'Not send successfully'

    })
}
///Data Recived
var display = document.getElementById("display");
function getDisplay() {
    firebase.database().ref("Product_Detail/").on("child_added", function (data) {
        let currentData = data.val();
         display.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="ProductCard">
          <img src="images/${currentData.Category}/${currentData.ProductCode}.jpg" alt="">
          <div class="pt-5 pb-5 p-3 text-left">
            <p class="text-muted">Rs. ${currentData.Price}</p>
            <p class="medium">${currentData.productName}</p>
            <input type="hidden" value="${currentData.ProductCode}"/>
            <input type="hidden" value="${currentData.Category}"/>
            <div class="button"><button onclick="addtoCart(this)" class='cartbtn'>Add to cart</button></div>
          </div>
        </div>
      </div>`
    })
}
getDisplay()




