import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAeNVkWG4p_y280m5-3NluNiT9PG7qPZ20",
    authDomain: "fir-c896e.firebaseapp.com",
    projectId: "fir-c896e",
    storageBucket: "fir-c896e.appspot.com",
    messagingSenderId: "626297850962",
    appId: "1:626297850962:web:6cf20008965a424d70638b"
  };

  export const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)
  export const auth = getAuth(app)