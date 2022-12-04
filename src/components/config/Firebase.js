// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBEzfwBVTaidpP-7oN88XP3gUGHKHPSGhA",
  authDomain: "apps-155ad.firebaseapp.com",
  projectId: "apps-155ad",
  storageBucket: "apps-155ad.appspot.com",
  messagingSenderId: "928983237582",
  appId: "1:928983237582:web:f5a79c4fe9b37facbae19f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
// const provider_fb = new FacebookAuthProvider(app);
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// provider_fb.setCustomParameters({
//   'display': 'popup'
// });

function SignIn(email,password){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Success")
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  });

}

// ==================== With Google ================================
function google(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log(credential)
    // const token = credential.accessToken;
    // // The signed-in user info.
    // const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    const errorMessage = error.message;
    // alert(errorMessage)
    // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}




// function facebook(){
//   signInWithPopup(auth, provider)
//   .then((result) => {
//     // The signed-in user info.
//     const user = result.user;

//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     const credential = FacebookAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;

//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = FacebookAuthProvider.credentialFromError(error);

//     // ...
//   });
// }
export {SignIn,
  google,
// facebook
}