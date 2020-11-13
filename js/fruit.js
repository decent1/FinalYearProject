var FruitBody = document.getElementById("FruitBody");

function getDisplay(){
    firebase.database().ref("Product_Detail/").on("child_added",function(data){
        let currentData = data.val();
        FruitBody.innerHTML += currentData.Category=='fruits'?`<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="ProductCard">
          <img src="../images/${currentData.Category}/${currentData.ProductCode}.jpg" alt="">
          <div class="pt-5 pb-5 p-3 text-left">
            <p class="text-muted">Rs. ${currentData.Price}</p>
            <p class="medium">${currentData.productName}</p>
            <div class="button"><button class='cartbtn' onclick="addtoCart(this)">Add to cart</button></div>
          </div>
        </div>
      </div>`:'';
    })
}
getDisplay()