import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDT9TjXli8Tvyoz59rzxXiraPcx_4ndKmg",
    authDomain: "react-developer-c4ba7.firebaseapp.com",
    projectId: "react-developer-c4ba7",
    storageBucket: "react-developer-c4ba7.appspot.com",
    messagingSenderId: "865438357487",
    appId: "1:865438357487:web:0f00572f6df4001bd4881a",
    measurementId: "G-T9FL59EPTX"
};
export const createUserProfileDocument = async (userAuth, addintioalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addintioalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;