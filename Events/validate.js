function validateLength(event, name, minLength = 2) {
  const error = document.getElementById(`error-${event.target.id}`)

  if (event.target.value === "")
    error.innerText = `Du måste ange ett ${name.toLowerCase()}`
  else {
    if (event.target.value.length < minLength)
      error.innerText = `${name}et måste bestå av minst ${minLength} tecken.`
    else error.innerText = ""
  }
}

function comparePassword(password, confirmPassword) {
  const error = document.getElementById(`error-${confirmPassword.target.id}`)

  if (password !== confirmPassword.target.value)
    error.innerText = `Lösenorden matchar inte`
  else error.innerText = ""
}
