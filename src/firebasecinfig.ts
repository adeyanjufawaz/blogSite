import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAsHxjj9u5eflyFLOScx_r0F6sUiMzI7yg",
  authDomain: "test-fccf4.firebaseapp.com",
  projectId: "test-fccf4",
  storageBucket: "test-fccf4.appspot.com",
  messagingSenderId: "604107495823",
  appId: "1:604107495823:web:9f4a9e5aea946174fe93fa",
  measurementId: "G-N0ELHEE8F7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)