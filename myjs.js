function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name == ""){
      text = "Please enter a valid name";
      error_message.innerHTML = text;
      return false;
    }
   
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      document.getElementById("myForm").reset();
      error_message.innerHTML = text;
      return false;
    }
    if(message.length === 0){
      text = "Please Enter a message";
      error_message.innerHTML = text;
      return false;
    }
    document.getElementById('name').value ='';
    document.getElementById('email').value ='';
    document.getElementById('message').value =''; 
    alert("Form Submitted Successfully!");

      
    return true;
  }



   // if(subject.length < 10){
    //   text = "Please enter a subject";
    //   error_message.innerHTML = text;
    //   return false;
    // }
    // if(isNaN(phone) || phone.length > 10){
    //   text = "Please enter valid Phone Number";
    //   error_message.innerHTML = text;
    //   return false;
    // }