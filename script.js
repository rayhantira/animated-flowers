function checkPassword() {
  var password = document.getElementById("passwordInput").value;

  if (password.toLowerCase() === "blue") {
    window.location.href = "flower.html";
  } else {
    alert("Wrong word! Hmm....");
  }
}
