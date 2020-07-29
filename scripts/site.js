
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCAImbXZ-qAV449BMSY9JcGhQEHFZibFco",
    authDomain: "winnect-7b291.firebaseapp.com",
    databaseURL: "https://winnect-7b291.firebaseio.com",
    projectId: "winnect-7b291",
    storageBucket: "winnect-7b291.appspot.com",
    messagingSenderId: "23032205046",
    appId: "1:23032205046:web:f049da4bbb1ff7221de6d7",
    measurementId: "G-FNBY0RK4BP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
      var email= document.getElementById("email");
      var password= document.getElementById("password");

      const promise= auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

      alert("Signed Up");
  }


    function logIn(){
    var email= document.getElementById("email");
    var password= document.getElementById("password");

    const promise= auth.signInWithEmailAndPassword(email.value, password.value);
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // promise.catch(errorCode => alert(errorMessage));
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);

    //alert("Logged In" + email.value);
    }

    function SignOut(){
        auth.SignOut();
        alert("Signed Out");
}


 auth.onAuthStateChanged(function(user) {
     if(user) {
       var email = user.email;
	   //alert("Active User " + email);

       window.location.href = 'home.html'; //After successful login, user will be redirected to home.html
     }
     else {
         console.log('NOT SIGNED IN');
         }
 });

