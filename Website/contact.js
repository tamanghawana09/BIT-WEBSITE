function validate(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var num = document.getElementById("contact-no").value;
    var number = parseInt(num);
    var email = document.getElementById("email").value;
    var sub = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    console.log("First Name : " + fname);
    console.log("Last Name : " + lname);
    console.log("Contact No : " + number);
    var regExp = /^([a-z A-Z 0-9 \._-]+)@([a-z 0-9]+.)([a-z]+.)([a-z]?)$/;
    if(regExp.test(email)){
        console.log("Email : " + email);
    }else{
        alert("Invalid Email");
        email.value =" ";
        return false;
    }
    console.log("Subject : " + sub);
    console.log("Message : " + message);
}