const email = document.querySelector("#email")
const password = document.querySelector("#password")
const btn = document.querySelector("#btn")


function emailFocus(){
    const emailValue = email.value;
    if(!emailValue){
        email.classList.add("error")
    }else{
        email.classList.remove("error")
    }
}
function passwordFocus(){
    const passwordValue = password.value;
    if(!passwordValue){
        password.classList.add("error")
    }else{
        password.classList.remove("error")
    }
   
}

email.addEventListener("blur",emailFocus)
password.addEventListener("blur",passwordFocus)