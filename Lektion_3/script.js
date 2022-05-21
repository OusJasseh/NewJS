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

  var forms = document.querySelectorAll('.need-validation')
  
  forms.forEach(element =>{
      
    switch(element.type) {
        case "text":
            element.addEventListener("keyup", function(e) {
                if(!validMinValue(e.target.value))
                    e.target.classList.add("is-invalid");
                else
                    e.target.classList.remove("is-invalid");
            })
              break;

        case "email":
            element.addEventListener("keyup", function(event){ 
                element.addEventListener("keyup", function(e) {
                
                    if(!valieEmail(e.target.value))
                        e.target.classList.add("is-invalid");
                    else
                        e.target.classList.remove("is-invalid");
                })
            })    
                break;

        case "textarea":
           
            element.addEventListener("keyup", function(e) {
                
                if(!validMinValue(e.target.value, 6))
                    e.target.classList.add("is-invalid");
                else
                    e.target.classList.remove("is-invalid");
                
    
  })
    break;
}
  })
