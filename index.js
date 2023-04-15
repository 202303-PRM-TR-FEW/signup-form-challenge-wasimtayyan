window.addEventListener('DOMContentLoaded', () => {
    const password = document.getElementById("Password")
    const firstName = document.querySelector("#firstName")
    const lastName = document.querySelector("#lastName")
    const email = document.querySelector("#email")
    const btn = document.querySelector("#btnClaim")
    const checkFirstName = document.querySelector("#checkName")
    const checkLastName = document.querySelector("#checkLastName")
    const checkPassword = document.querySelector("#checkPassword")
    const checkEmail = document.querySelector("#checkEmail")


    btn.addEventListener("click", submittion)
    firstName.addEventListener('input', handleName)
    lastName.addEventListener('input' ,handleLastN)
    email.addEventListener('input', handleEmail)

    function handleName() {
        if (firstName.value === "" || !firstName.value.match(/^[a-zA-Z]+$/)){
            firstName.classList.add('invalid')
            checkFirstName.style.display = 'block'
            return false
        }else {
            firstName.classList.remove('invalid')
            checkFirstName.style.display = 'none'
            return true
        }
    }

    function handleLastN() {
        if (lastName.value === "" || !lastName.value.match(/^[a-zA-Z]+$/)) {
            lastName.classList.add("invalid")
            checkLastName.style.display = "block"
            return false
        }else {
            lastName.classList.remove("invalid")
            checkLastName.style.display = 'none'
            return true
        }
    }

function handleEmail(){
    if (email.value.match(/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi)) {
        email.classList.remove("invalid")
        checkEmail.style.display = 'none'
        return true
    }else{
        email.classList.add("invalid")
        checkEmail.style.display = 'block'
        return false
    }

}
    password.addEventListener("input", handlePassword)
function handlePassword () {
    if (password.value.length < 8) {
        password.classList.add("invalid")
        checkPassword.style.display = 'block'
        return false
    }else {
        password.classList.remove('invalid')
        checkPassword.style.display = 'none'
        return true
    }
}
function submittion () {
    if (handleName() && handleLastN() && handleEmail() && handlePassword() ) {
        btn.classList.add("enableBtn")
        btn.classList.remove('disableBtn')
    }else {
        btn.classList.remove('disableBtn')
        btn.classList.add('disableBtn')
    }
}
})