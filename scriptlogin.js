

function logIn(){ 
    
    let emailAddress=document.getElementById("email").value;
    let pass=document.getElementById("password").value;

   

    let users = {
   
     email:emailAddress,
     password:pass,
    
}

if(emailAddress===""){
    return  alert("fill in empty spaces");
     }
     
     else if  (password !=password){
       return  alert("Password must match.");
   }
  else{

    let user=JSON.stringify(users);
    localStorage.setItem('users', user);
     window.location.href ='./populatedData.html';
    }
 

   
 

  return alert("User loggeg in");

}















