export function validateMinLength(element, minLength = 2) {
    if (element.value.length < minLength) 
        document.getElementById(`error-${element.id}`).innerText = "Hej"

}
