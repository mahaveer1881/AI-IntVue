// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
// import {gerAuth}
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCekGC5d_RjWElIjHcZcUZ1u-r_8C0NF_A',
  authDomain: 'intvue-768bf.firebaseapp.com',
  projectId: 'intvue-768bf',
  storageBucket: 'intvue-768bf.firebasestorage.app',
  messagingSenderId: '14882146376',
  appId: '1:14882146376:web:e69f1b50135d00b5a1b07d',
  measurementId: 'G-68X6V4T5BF',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
