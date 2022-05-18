document.getElementById("firstName").addEventListener("keyup", function (event) {
    const name = "Förnamn"
    validateLength(event, name)
  });

document.getElementById("lastName").addEventListener("keyup", function (event) {
  const name = "Efternamn"
  validateLength(event, name)
});

document.getElementById("password").addEventListener("keyup", function(event){
    const name = "Lösenord"
    validateLength(event, name, 8)
})

document.getElementById("confirmPassword").addEventListener("keyup", function(event) {
  const password = document.getElementById("password").value
  comparePassword(password, event)
})





