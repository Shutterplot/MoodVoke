const firebaseConfig = {
    apiKey: "AIzaSyCAC4zMy-s-zrP8tLt6xlvXt7K3zRRdhRc",
    authDomain: "convoke-c1cac.firebaseapp.com",
    projectId: "convoke-c1cac",
    storageBucket: "convoke-c1cac.appspot.com",
    messagingSenderId: "971315103978",
    appId: "1:971315103978:web:ed18b6527f0c73dadfaf93"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();