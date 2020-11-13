var CustomerDetailTable = document.getElementById('CustomerDetailTable');

firebase.database().ref("user").on("child_added",function(data){
    let currentData = data.val();
    console.log(currentData)
    CustomerDetailTable.innerHTML += `<tbody>
      <tr class="CDT">
        <td >${currentData.uid}</td>
        <td >${currentData.firstName}${currentData.lastName}</td>
        <td >${currentData.addres}</td>
        <td >${currentData.contact}</td>
        <td >${currentData.city}</td>
      </tr>
    </tbody>
  `
  })
  
