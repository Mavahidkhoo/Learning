// import "../js/validation.js";
let urlBar = window.location.href;
let username = urlBar.split("?");
personInfo = localStorage.getItem(username[1]);
personInfo = JSON.parse(personInfo);
console.log(personInfo);
document.getElementById("FirstName").value = personInfo.firstName;
document.getElementById("LastName").value = personInfo.lastName;
document.getElementById("Mail").value = personInfo.Email;
document.getElementById("UserName").value = personInfo.userName;
document.getElementById("Age").value = personInfo.age;
if ((personInfo.gender = "Male")) {
  document.getElementById("Male").checked = true;
} else {
  document.getElementById("Female").value = true;
}
document.getElementById("Pass").value = personInfo.passWord;
document.getElementById("PassCheck").value = personInfo.passWord;
document.getElementById("Edit").addEventListener("click", edit);

function edit() {
    
  document.getElementById("FirstName").removeAttribute("disabled");
  document.getElementById("LastName").removeAttribute("disabled");
  document.getElementById("Mail").removeAttribute("disabled");
  document.getElementById("UserName").removeAttribute("disabled");
  document.getElementById("Age").removeAttribute("disabled");
  document.getElementById("Male").removeAttribute("disabled");
  document.getElementById("Female").removeAttribute("disabled");
  document.getElementById("Pass").removeAttribute("disabled");
  document.getElementById("PassCheck").removeAttribute("disabled");
  document.getElementById("BtnSave").classList.remove("d-none");
  
}