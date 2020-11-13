var getDataFromLocalStorage = localStorage.getItem('user');
// console.log(getDataFromLocalStorage)
console.log('User from local Storage', JSON.parse(getDataFromLocalStorage));

var user = JSON.parse(getDataFromLocalStorage)


var UserName = document.getElementById("name");
var contact = document.getElementById("contact");
var email = document.getElementById("email");
var adress = document.getElementById("adress");
var city = document.getElementById("city");
var personalInfo =document.getElementById("personalInfo");



UserName.innerHTML = user.firstName + " " + user.lastName
console.log(UserName)
contact.innerHTML = user.contact
email.innerHTML = user.email
adress.innerHTML = user.addres
city.innerHTML = user.city
personalInfo.innerHTML = user.personalInformation

var mainNAme = document.getElementById("mainNAme");
var Designation = document.getElementById("Designation");

mainNAme.innerHTML = user.firstName + " " + user.lastName;
Designation.innerHTML = user.city;
