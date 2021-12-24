import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider, updateProfile } from "firebase/auth";

export const initilizedLogin = () => {
    initializeApp(firebaseConfig);
  
}

export const handleGoogleSignIn = () => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth()
  return signInWithPopup(auth, googleProvider)
    .then((result) => {
      // console.log(result)
      const { displayName, email, photoURL } = result.user;

      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true
      };
      return signedInUser

    })
    .catch(error => {
      // console.log(error);
      alert(error.message)
    })

};
 // handle sign out action
 export const handleGoogleSignOut = () => {
  const auth = getAuth();
  return signOut(auth)
    .then(() => {

      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
      }
      return signedOutUser;
    })
    .catch((err => {
      console.log(err)
    }))
};
export  const handelFacebookbSignIn = () => {
  const fbProvider = new FacebookAuthProvider();
  const auth = getAuth();
 return signInWithPopup(auth, fbProvider)
    .then((result) => {
      const user = result.user;
      user.success = true;
      return user;
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error)
    });

};

export const handleCreateUserWithEmailPassword = (email, name, password) => {
     const auth = getAuth();
    return createUserWithEmailAndPassword(auth , email, password)
       .then(res => {
         const newUserInfo = res.user;
         newUserInfo.error = '';
         newUserInfo.success = true;
         updateUserName(name);
        //  console.log(res)
         return newUserInfo;
       })
       .catch(error => {
         const newUserInfo = { };
         newUserInfo.error = error.message;
         newUserInfo.success = false;
         return newUserInfo;
       
       })
}

export const handleSignInWithEmailPassword = (email, password) => {
  const auth = getAuth();
 return signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const newUserInfo = res.user;
      console.log(res)
      newUserInfo.error = '';
      newUserInfo.success = true;
      return newUserInfo;
    })

    .catch((error) => {
      const newUserInfo = { };
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
}


const updateUserName = (name) => {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: name
  })
    .then(() => {
      // Profile updated!
      console.log("user name updated Successfully")
    })
    .catch((error) => {
      // An error occurred
      console.log(error)
      // ...
    });
}