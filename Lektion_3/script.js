document.getElementById("contactForm-firstName").addEventListener("focus", function(event){
    document.getElementById("contactForm-firstName").style.fontSize = "0.9em"
})

document.getElementById("contactForm-firstName").addEventListener("blur", function (event) {
    document.getElementById("contactForm-firstName").style.fontSize = "1em";
  });


function validMinValue(value, minValue = 2) {
    if (value.length < minValue)
        return false
    else
        return true
}

function valieEmail(value) {
     const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     if(!regEx.test(value))
        return false
     else
        return true
}

    function checkValidForm(elements){
        let disable = false
        elements.forEach(element => {
            if(element.value === "")
                disable = true
                 
        })
        document.getElementById("contactFormSubmit").disabled = disable
    }

  var forms = document.querySelectorAll('.need-validation')

  checkValidForm(forms)
  
  forms.forEach(element =>{
      
    switch(element.type) {
        case "text":
            element.addEventListener("keyup", function(e) {
                if(!validMinValue(e.target.value)) {
                    e.target.classList.add("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
            }
        
                else {
                    e.target.classList.remove("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                }   
                    
            })
              break;

        case "email":
         
                element.addEventListener("keyup", function(e) {
                
                if(!valieEmail(e.target.value)) {
                    e.target.classList.add("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
            }
        
                else {
                    e.target.classList.remove("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                }   
                  
                })
                
                break;

        case "textarea":
           
            element.addEventListener("keyup", function(e) {
                
                if(!validMinValue(e.target.value, 5)) {
                e.target.classList.add("is-invalid");
                    document.getElementById(`${e.target.id}-error`).display = "block"
            }
                else {
                    e.target.classList.remove("is-invalid");
                    document.getElementById(`${e.target.id}-error`).display = "none"
                }          
        })    
    break;
    }
})

function onSubmit(e) {
    e.preventDefault()

    for(let element of e.target)
        switch(element.type){
            case "text":
               
                if(!validMinValue(element.value)) {
                    element.classList.add("is-invalid");
                    document.getElementById(`${element.id}-error`).style.display = "block"
            }
        
                else {
                    element.classList.remove("is-invalid");
                    document.getElementById(`${element.id}-error`).style.display = "none"
                   
                    
            }
              break;
        }
}



