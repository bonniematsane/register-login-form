let personalDetails = [];

function regPage(){ 
    let firstname=document.getElementById("name").value;
    let lastname=document.getElementById("Lastname").value;
    let emailAddress=document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    let confPass=document.getElementById("confirmPassword").value;
    let tell=document.getElementById("Cellphone").value;

    let users = {

     name:firstname,
     surname:lastname,
     email:emailAddress,
     password:pass,
     confirmpassword:confPass,
     number:tell
}

if(firstname===""){
    return  alert("fill in empty spaces");
     }
     else if(users.number <10){
      alert("Please enter a correct cellphone no..");
      return ;
     }
     else if(pass !=confPass){
       return  alert("Password must match.");
   }
  else{

    let user=JSON.stringify(users);
    localStorage.setItem('users', user);
    window.location.href ='index.html';

  return alert("User registered");

}

}

function logIn(){
  window.location.href ='/index.html';
}










