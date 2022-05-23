function validateMinvalue(value, minValue = 2) {
    if(value.length < minValue)
        return false
    else
        return true
}

function validEmail(value, minValue = 2){
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if(!regEx.test(value))
        return false
    
    return true
}

function validPassword(value) {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"/

    if(!regEx.test(value))
            return false
      
        return true;        
}

function validateForm(){

}

function onSubmit(e) {
    e.preventDefault()
    console.log("submitted")
}
    
  

function checkValidForm(elements){
        let disable = false
        let errors = document.querySelectorAll('.is-invalid')
        console.log(errors)

        elements.forEach(element => {
           if(element.value === "" || errors.length > 0)
           disable = true
    })
    
        document.getElementById("contactFormSubmit").disabled = disable;
    
}


function setEventListners(){
    forms.forEach((e) => {
      switch (e.type) {
        case "text":
          e.addEventListener("keyup", function (e) {
            if (!validateMinvalue(e.target.value)) {
              e.target.classList.add("is-invalid");
              document.getElementById(`${e.target.id}-error`).style.display =
                "block";
              checkValidForm(forms);
            } 
            else {
              e.target.classList.remove("is-invalid");
              document.getElementById(`${e.target.id}-error`).style.display =
                "none";
              checkValidForm(forms);
            }
          });
          break;

        case "email":
          e.addEventListener("keyup", function (e) {
            if (!validEmail(e.target.value)) {
              e.target.classList.add("is-invalid");
              document.getElementById(`${e.target.id}-error`).style.display =
                "block";
              checkValidForm(forms);
            } 
            else {
              e.target.classList.remove("is-invalid");
              document.getElementById(`${e.target.id}-error`).style.display =
                "none";
              checkValidForm(forms);
            }
          });

          break;

        case "textarea":
          e.addEventListener("keyup", function (e) {
            if (!validateMinvalue(e.target.value, 5)) {
              e.target.classList.add("is-invalid");
              document.getElementById(`${e.target.id}-error`).style.display ="block";
              checkValidForm(forms);
            }
            else {
              e.target.classList.remove("is-invalid");
              document.getElementById(`${e.target.id}-error`).style.display =
                "none";
              checkValidForm(forms);
            }
          });
          break;
      }
    });
}



var forms = document.querySelectorAll('.needs-validation') //Leta igenom alla fält som har needs-validation i sig.

checkValidForm(forms)
setEventListners()


