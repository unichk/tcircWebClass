document.getElementById("to-register").addEventListener("click", () => {
    document.getElementById("login-form").classList.add("form-hidden");
    document.getElementById("register-form").classList.remove("form-hidden");
});

document.getElementById("to-login").addEventListener("click", () => {
    document.getElementById("login-form").classList.remove("form-hidden");
    document.getElementById("register-form").classList.add("form-hidden");
});

function addErrormsg(tag, msg) {
    tag.classList.remove("form_message--success");
    tag.classList.add("form_message--error");
    tag.innerHTML = msg;
}

function removemsg(tag) {
    tag.innerHTML = "";
}

document.getElementById('login').addEventListener("click", () => {
    let loginUsr = document.getElementById('login-username').value;
    let loginPwd = document.getElementById('login-password').value;
    console.log("Usr:" + loginUsr);
    console.log("Pwd:" + loginPwd);
    if (loginUsr == "admin" && loginPwd == "superSecret") {
        removemsg(document.getElementById('login_form-message'));
        document.getElementById('container').innerHTML = `<h1 class="form_title">Welcome Admin</h1>`;
        document.getElementById('login-form').classList.add("form-hidden");
    } else {
        removemsg(document.getElementById('login_form-message'));
        removemsg(document.getElementById('login_username-message'));
        removemsg(document.getElementById('login_password-message'));
        addErrormsg(document.getElementById('login_form-message'), "Incorrect username/password combination");
        if (loginUsr != "admin") {
            addErrormsg(document.getElementById('login_username-message'), "Incorrect username");
        } else if (loginPwd != "a") {
            addErrormsg(document.getElementById('login_password-message'), "Incorrect password");
        }
    }
});

document.getElementById('register').addEventListener("click", () => {
    let registerUsr = document.getElementById('register-username').value;
    let registerEmail = document.getElementById('register-email').value;
    let registerPwd = document.getElementById('register-password').value;
    let registerConfirmPwd = document.getElementById('register-confirm-password').value;
    registerInfo = {
        Username: registerUsr,
        Email: registerEmail,
        Password: registerPwd,
        ConfirmPassword: registerConfirmPwd
    }
    console.log(registerInfo);
    for (key in registerInfo) {
        removemsg(document.getElementById(`register_${key}-message`));
    }
    let allValid = true;
    for (let key in registerInfo) {
        if (key == "Username") {
            if (registerInfo[key].length < 3) {
                addErrormsg(document.getElementById(`register_${key}-message`), "Username must be at least 3 characters");
                allValid = false;
            } else if (registerInfo[key] == "admin"){
                addErrormsg(document.getElementById(`register_${key}-message`), "Username already taken");
                allValid = false;
            }
        }
        if (key == "Email" && !registerInfo[key].includes("@")) {
            addErrormsg(document.getElementById(`register_${key}-message`), "Email must be valid");
            allValid = false;
        }
        if (key == "Password" && registerInfo[key].length < 6) {
            addErrormsg(document.getElementById(`register_${key}-message`), "Password must be at least 6 characters");
            allValid = false;
        } else if (key == "ConfirmPassword" && registerInfo[key] != registerInfo["Password"]) {
            addErrormsg(document.getElementById(`register_${key}-message`), "Passwords do not match");
            allValid = false;
        }
        if (registerInfo[key] == "") {
            addErrormsg(document.getElementById(`register_${key}-message`), "This field is required");
            allValid = false;
        }
    }
    if (allValid){
        document.getElementById('container').innerHTML = 
            `<h1 class="form_title">Successfully Registered</h1>
            <h3 class="form_title">with the following info</h3>
            <p>Username: ${registerInfo["Username"]}</p>
            <p>Email: ${registerInfo["Email"]}</p>`;
    }else{
        document.getElementById('register-form-message').innerHTML = "Please correct all the errors";
    }
});