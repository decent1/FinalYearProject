var CustomerOrder = document.getElementById('CustomerOrder');

firebase.database().ref("user").on("child_added", function (data) {
    let currentData = data.val();
    var products = currentData.cartItems;
    console.log(JSON.parse(products))
    let userOrder = JSON.parse(products)
    CustomerOder.innerHTML += `<thead>
    <tr>
      <th class="customerDetail">${currentData.uid}</th>
      <th class="customerDetail">${currentData.firstName}${currentData.lastName}</th>
    </tr>
  </thead>
<tbody>
  ${userOrder.map(function (e, index) {
    return `<tr ${index}>
    <td class="align-middle">${e.name}</td>
    <td class="align-middle price">${e.price}</td>
 
            </tr>`
}).join('')}
    </tbody>
    `
  })
  
