document.getElementById("BtnLogin").addEventListener("click", login);
function login() {
  let checkUser;
  let person;
  let personlocate;
  let userName = document.getElementById("username").value;
  //check username
  {
    if (document.getElementById("username").value == "") {
      document.getElementById("usernameHelp2").classList.add("d-none");
      document.getElementById("usernameHelp").classList.remove("d-none");
    } else {
      for (let i = 0; i <= localStorage.length; i++) {
        checkUser = localStorage.getItem(userName);
        if (checkUser == null) {
          document.getElementById("usernameHelp").classList.add("d-none");
          document.getElementById("usernameHelp2").classList.remove("d-none");
          break;
        } else {
          document.getElementById("usernameHelp").classList.add("d-none");
          document.getElementById("usernameHelp2").classList.add("d-none");
          break;
        }
      }
    }
  }
  //check password match
  {
    person = JSON.parse(checkUser);
    if (person.passWord == document.getElementById("password").value) {
      document.getElementById("passwordHelp").classList.add("d-none");
      window.location.replace("../index/profile.html?"+userName);
    } else {
      document.getElementById("passwordHelp").classList.remove("d-none");
    }
  }
}
