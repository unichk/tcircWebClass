document.getElementById("to-register").addEventListener("click", ()=>{
    document.getElementById("login-form").classList.add("form-hidden");
    document.getElementById("register-form").classList.remove("form-hidden");
});

document.getElementById("to-login").addEventListener("click", ()=>{
    document.getElementById("login-form").classList.remove("form-hidden");
    document.getElementById("register-form").classList.add("form-hidden");
});

function addErrormsg(tag, msg){
    tag.classList.remove("form_message--success");
    tag.classList.add("form_message--error");
    tag.innerHTML = msg;
}

function removemsg(tag){
    tag.innerHTML = "";
}

document.getElementById('login').addEventListener("click", ()=>{
    let loginUsr = document.getElementById('login-username').value;
    let loginPwd = document.getElementById('login-password').value;
    console.log("Usr:" + loginUsr);
    console.log("Pwd:" + loginPwd);
    if(loginUsr == "admin" && loginPwd == "a"){
        removemsg(document.getElementById('login_form-message'));
        document.getElementById('container').innerHTML = `<h1 class="form_title">Welcome Admin</h1>`;
        document.getElementById('login-form').classList.add("form-hidden");
    }else{
        removemsg(document.getElementById('login_form-message'));
        removemsg(document.getElementById('login_username-message'));
        removemsg(document.getElementById('login_password-message'));
        addErrormsg(document.getElementById('login_form-message'), "Incorrect username/password combination");
        if(loginUsr != "admin"){
            addErrormsg(document.getElementById('login_username-message'), "Incorrect username");
        }else if(loginPwd != "a"){
            addErrormsg(document.getElementById('login_password-message'), "Incorrect password");
        }
    }
});