import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFEVck8M5R8Ihl5najxHfNNHlruXuYun0",
  authDomain: "pokepedia-login.firebaseapp.com",
  projectId: "pokepedia-login",
  storageBucket: "pokepedia-login.appspot.com",
  messagingSenderId: "447234896308",
  appId: "1:447234896308:web:b4360897aa59a5267b42e1"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
