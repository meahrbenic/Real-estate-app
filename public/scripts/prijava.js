var loginButton;
var logoutButton;

document.addEventListener("DOMContentLoaded", function () {
  var iframeMeni = document.getElementById("iframeMeniID");

  iframeMeni.addEventListener("load", function () {
    var iframeDocument =
      iframeMeni.contentDocument || iframeMeni.contentWindow.document;
    console.log(iframeDocument);
    loginButton = iframeDocument.getElementById("prijava");
    logoutButton = iframeDocument.getElementById("logoutButton");
    console.log("evo onaj event :)");
    console.log(loginButton);
  });
});

var podaci = {
  username,
  password,
};

function postLoginCallback(err, data) {
  if (data) {
    if (data.poruka.toString() == "Neuspješna prijava") {
      document.getElementById("poruka").innerHTML =
        "Pogrešan username ili password!";
    } else {
      console.log(loginButton);
      localStorage.setItem("isLogOutVisable", "true");
    }
    window.location.href = "nekretnine.html";
  } else {
    console.log("server vraca error: ", err);
  }
}

// Pozivi middleware-a
document.getElementById("forma").addEventListener("submit", function (event) {
  event.preventDefault();

  podaci.username = document.getElementById("username").value;
  podaci.password = document.getElementById("password").value;
  console.log(podaci);
  PoziviAjax.postLogin(podaci.username, podaci.password, postLoginCallback);
});
