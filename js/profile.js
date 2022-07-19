let urlBar = window.location.href;
console.log(urlBar);
let username=urlBar.split('?')
personInfo=localStorage.getItem(username[1])
personInfo=JSON.parse(personInfo)
console.log(personInfo);
document.getElementById("FirstName").value=personInfo.firstName;
document.getElementById("LastName").value=personInfo.lastName;
document.getElementById("Mail").value=personInfo.Email;
document.getElementById("UserName").value=personInfo.userName;
document.getElementById("Age").value=personInfo.age;
if(personInfo.gender="Male"){
    document.getElementById("Male").checked=true;
}else{
    document.getElementById("Female").value=true;
}
document.getElementById("Pass").value=personInfo.passWord;
document.getElementById("PassCheck").value=personInfo.passWord;

// document.getElementById("Edit").addEventListener("click", edit);
// function edit() {}
