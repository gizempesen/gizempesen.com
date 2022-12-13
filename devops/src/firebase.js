  import firebase from 'firebase';
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC0sVnBNlNZlu6VUTssHjJAHNfXMFsVUZ8",
    authDomain: "devops-35836.firebaseapp.com",
    databaseURL: "https://devops-35836-default-rtdb.firebaseio.com",
    projectId: "devops-35836",
    storageBucket: "devops-35836.appspot.com",
    messagingSenderId: "619382070915",
    appId: "1:619382070915:web:dc2e52f521f92d61acc5b6",
    measurementId: "G-1CX9BR74PS"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };