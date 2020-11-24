var pencil = document.getElementById("pencil");

function getDisplay(){
    firebase.database().ref("Product_Detail/").on("child_added",function(data){
        let currentData = data.val();
        pencil.innerHTML += currentData.Category=='pencils'?`<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="ProductCard">
          <img src="../images/${currentData.Category}/${currentData.ProductCode}.jpg" alt="">
          <div class="pt-5 pb-5 p-3 text-left">
            <p class="text-muted">Rs. ${currentData.Price}</p>
            <p class="medium">${currentData.productName}</p>

            <div class="button"><button class='cartbtn onclick="addToCart(currentData.ProductCode)"'>Add to cart</button></div>
          </div>
        </div>
      </div>`:'';

    })

}
getDisplay()