function validate(){  
var name=document.signup.surname.value;  
var password=document.signup.password.value;  
var cpassword=document.signup.passwor.value; 
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  else if(password !== cpassword ){  
  alert("Password donybt mabtch.");  
  return false;  
  } 
  else{
   alert("Welcome"+ "" + name)
  }
}  