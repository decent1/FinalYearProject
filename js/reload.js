function reload() {
    localStorage.getItem("cart_items")
    let total = 0;
   
    if (cart.length > 0) {
        $('#cartBody').html(
            ` <table class="table">
            ${cart.map(function (e, index) {
                total += parseInt(e.price.substr(4))
                return `<tr>
                            <td class="align-middle"><button class="btn btn-danger" onclick="removeItem(${index})">x</button></td>
                            <td class="align-middle"><img width="100" src="${e.image}"><td>
                            <td class="align-middle">${e.name}<td>
                            <td class="align-middle"><input name="cartItemQty" type="number" value="1" style="width: 50px;" /><td>
                            <td class="align-middle price">${e.price}<td>
                        </tr>`;
            }).join('')}
            </table>
            <div class="text-right pr-4"><strong>TOTAL:</strong> ${total}</div>
            `
        )
    } else {
        $('#cartBody').html('<img style="width: 100%;" src="https://oceanicamaldives.com/bubbleit/assets/empty-cart.png">')
    }

}