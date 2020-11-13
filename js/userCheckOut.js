var checkMeOut = document.getElementById("checkMeOut");

function myFunction(){
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
        
            firebase.database().ref('/').child(`user/${user.uid}`).on("child_added", function (data){
                
                var printData = JSON.parse(data.val());
              console.log("aaaaaa=====", printData)
              checkMeOut.innerHTML+=`<table class="table">
              ${printData.map(function (e, index) {

                  return `<tr key=${index}>
        
            <td class="align-middle"><img src=${`../images/${e.category}/${e.productCode}.jpg`} alt="" width="80"><td>
           <td class="align-middle">${e.category}<td>
             <td class="align-middle">${e.name}<td>
             <td class="align-middle price">${e.price}<td>
         </tr>`;
              }).join('')}
              </table>
              `
            })

           
        } else {
            // No user is signed in.
        }
    });
}

myFunction()

