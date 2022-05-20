function Login() {
  let loginInfo = [];
  const firstUserPass = {};
  const secondUserPass = {};

  firstUserPass = {
    uname: "abcd@gmail.com",
    password: btoa("abc@12"),
  };
  secondUserPass = {
    name: "bcd@gmail.com",
    password: btoa("bcd@12"),
  };
  loginInfo.push(firstUserPass);
  loginInfo.push(secondUserPass);
}
let username = document.getElementById("uname").value;
let password = document.getElementById("psw").value;
localStorage.setItem("all_users", JSON.stringify(loginInfo));

loginInfo = JSON.parse(localStorage.getItem("all_users"));
loginInfo.push({ name: username, password: password });
localStorage.setItem("name", JSON.stringify(loginInfo));
for (var i = 0; i < loginInfo.length; i++) {
  var li = document.createElement("li");
  li.innerHTML = a[i]["name"];
  document.getElementById("listuser").appendChild(li);
}

function Login() {
  const hash = Object.fromEntries(loginInfo.map((e) => [e.name, e.password]));
  var username = document.getElementById("uname").value;
  var password = document.getElementById("psw").value;
  for (let key of hash) {
    if (key[0] === username && key[1] === atob(password)) {
      alert("Login successful");
    } else {
      alert("Login fail");
    }
  }
}
