function validate(){
    var course = document.getElementById("course").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var num = document.getElementById("number").value;
    var ph_num = parseInt(num);
    var date = document.getElementById("birthdate").value;
    var marks_see = document.getElementById("marks-see").value;
    var mark_see = parseInt(marks_see); 
    var marks_plus2 = document.getElementById("marks-plus2").value;
    var mark_plus2 = parseInt(marks_plus2);
    var gender = document.getElementById("gender")
    
    console.log("Course: "  + course);
    console.log("First Name : " + fname);
    console.log("Last Name : " + fname);
    var regExp = /^([a-z A-Z 0-9 \._-]+)@([a-z 0-9]+.)([a-z]+.)([a-z]?)$/;
    if(regExp.test(email)){
        console.log("Email : " + email);
    }else{
        alert("Invalid Email");
        email.value =" ";
        return false;
    }
    console.log("Phone Number : " + ph_num);
    console.log("Date of Birth : " + date);
    console.log("Gender : " + gender);
    var markExp = /^([a-z A-Z 0-9])$/;
    if(markExp.test(mark_see)){
        console.log("Marks of SEE : " + mark_see);
    }else{
        alert("Invalid Marks");
        marks_see.value= " ";
        return false;
    }
    if(markExp.test(mark_plus2)){
        console.log("Marks of +2 : " + mark_plus2);
    }else{
        alert("Invalid Marks");
        marks_plus2.value= " ";
        return false;
    }
    
    
}