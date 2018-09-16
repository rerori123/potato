console.log("Hi I'm javascript");

// auth
var provider = new firebase.auth.GoogleAuthProvider();

const authy = (e) => {
  e.preventDefault();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(user);
    localStorage.isLoggedIn = "true";
    localStorage.user = JSON.stringify(user);
    location.replace('/profile.html')
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.error(error);
    alert('Error occured. Login failed.')
    // ...
  });
}

document.querySelector("#login").addEventListener("click", authy);
document.querySelector("#signup").addEventListener("click", authy)