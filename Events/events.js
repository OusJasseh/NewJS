import { validateEmail, validateMinLength, validatePassword } from "./validatescript.js";

document.getElementById("name").addEventListener("keyup", function(event) {
    validateMinLength(event.target)
})

document.getElementById("email").addEventListener("keyup", function (event) {
        validateEmail(event.target)
});

document.getElementById("password").addEventListener("keyup", function (event) {
    validatePassword(event.target, 8);
});

document.getElementById("message").addEventListener("keyup", function (event) {
    validateMinLength(event.target, 5);
});



document.getElementById("ContactForm").addEventListener("submit", function(event) {
    event.preventDefault()


    for (let element of event.target)
     
        
        switch (element.type) {
          case "text":
            validateMinLength(element);
            break;

          case "email":
            validateEmail(element);
            break;

          case "password":
            validatePassword(element);
            break;

          case "textarea":
              validateMinLength(element, 5)
            break;
        }
})
