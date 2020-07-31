function signUp(){
    var email= document.getElementById("email_field").value;
    var password= document.getElementById("password_field").value;
    var fname=document.getElementById("first_name").value;
    var lname=document.getElementById("last_name").value;

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(function(user){
        console.log('SIGNED UP SUCCESFULLY');
        var user = firebase.auth().currentUser;
        var db= firebase.firestore();
        db.collection("users").doc(user.uid).set({
            firstName: fname,
            lastName: lname,
            uid: user.uid,
            isTutor:false,
            pfpURL:null,
        })
        .then(function() {
            console.log("User data successfully submitted!");
            window.location.href = "myaccount.html"
        })
        .catch(function(error) {
            console.error("Error submitting user data: ", error);
        })
    
    }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        console.log("Error : " + errorMessage);
    }
        

        )}


function pfp(){
    var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
        // Create a root reference
        var storageRef = firebase.storage().ref();

        // Create a reference to 'mountains.jpg'
        var mountainsRef = storageRef.child('mountains.jpg');

        // Create a reference to 'images/mountains.jpg'
        var mountainImagesRef = storageRef.child('images/mountains.jpg');

        // While the file names are the same, the references point to different files
        mountainsRef.name === mountainImagesRef.name            // true
        mountainsRef.fullPath === mountainImagesRef.fullPath    // false

    } else {
      // No user is signed in.
      return;
    }
    
}
