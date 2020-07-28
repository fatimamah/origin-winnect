
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
    promise.catch(e => alert(e.message));

    alert("Logged In");
}

auth.onAuthStateChanged(function(user){

});

