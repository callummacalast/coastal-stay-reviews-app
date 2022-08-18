// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCev1yeB7zSRF4tfkUX0qYYzjXie2YBcds',
  authDomain: 'coastal-stay-message-app.firebaseapp.com',
  projectId: 'coastal-stay-message-app',
  storageBucket: 'coastal-stay-message-app.appspot.com',
  messagingSenderId: '630279842559',
  appId: '1:630279842559:web:2651ecf84cce9dbf313aca',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);