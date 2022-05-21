import { validateMinLength } from "./validatescript.js";

document.getElementById("name").addEventListener("keyup", function(event) {
    validateMinLength(event.target)
})

document.getElementById("ContactForm").addEventListener("submit", function(event) {
    event.preventDefault()

   

    for (let element of event.target)
     
        
        switch (element.tagName) {
          
            case "INPUT":
                validateMinLength(element)
                break;

            case "SELECT":

                break;

            case "TEXTAREA":
                break;
        }
})
