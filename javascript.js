//Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// Validera data, validate data
function validateForm() {

    clearMessages();
    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank"
        nameInput.classList.add("error-border");
        errorFlag = ture;
    }

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = " Invalid email "
        email.classList.add("error-border");
        errorFlag = ture;
    }

    if (message.value.length < 1) {
        errorNodes[2].innerText = "Please enter message";
        message.classList.add("error-border");
        errorFlag = ture;
    }
   
    if (!errorFlag) {
        success.innerText = "Success!";
    }
}

//Clear error /succes Message

function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
    // document.getElementById("myForm").reset();
}

function emailIsValid(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

