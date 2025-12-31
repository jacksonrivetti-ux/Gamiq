if (localStorage.getItem("loggedIn") === "true") {
  showSite();
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "admin1234") {
    localStorage.setItem("loggedIn", "true");
    showSite();
  } else {
    document.getElementById("error").innerText =
      "Wrong username or password";
  }
}

function showSite() {
  document.getElementById("login-box").style.display = "none";
  document.getElementById("site").style.display = "block";
}

function logout() {
  localStorage.removeItem("loggedIn");
  location.reload();
}
