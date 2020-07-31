function logIn(){
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(user){
    
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              var user = firebase.auth().currentUser;
          
              if(user != null){ 
                  //redirect to home page
                window.location.href = "home.html";
                // var userEmail = document.getElementById("email_field").value;
                // console.log(userEmail + "logged in");
              } 
            } else {
              // No user is signed in.  
              console.log('NOT SIGNED IN');
            }
          });
    
        }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      console.log("Error : " + errorMessage);
    })}
  
  

 
  





