function validateForm(){
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var mobile = document.forms["myForm"]["mobile"].value;
    var password = document.forms["myForm"]["password"].value;
    var confirm_password = document.forms["myForm"]["confirm_password"].value;
   
    var name_regex = /^[A-Z][a-z]{0,19}$/;
    if(name == "" || !name_regex.test(name)){
        alert("Enter a valid name");
        return false;
    }

    var email_regex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email == "" || !email_regex.test(email)){
        alert("Enter a valid email");
        return false;
    }

    var mobile_regex = /^[0-9]{10}$/;
    if(mobile == "" || !mobile_regex.test(mobile)){
        alert("Enter a valid mobile number");
        return false;
    }

    var password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(password == "" || !password_regex.test(password)){
        alert("Enter a valid password");
        return false;
    }

    if(password != confirm_password){
        alert("Password does not matched");
        return false;
    }
    alert("Form submitted successfully");
    return true;
}
