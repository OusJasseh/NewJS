/*

    classic 
    function theName() {}

    ES6 - ARROW/LAMBDA function (krånglar med ordet This)
    const theName = () => {}


*/

function validateLength(input) {
    if(input.length > 2)
        console.log(true)
    else
        console.log(false)
}

function confirmPassword(Password, confirmPassword) {
    if (Password === confirmPassword)
        console.log(true)
    else   
        console.log(false)
}


validateLength(document.getElementById("Name").value)

let inputPassword = document.getElementById("Password").value
let inputConfigurePassword = document.getElementById("confirmPassword").value

confirmPassword(inputPassword, inputConfigurePassword)


