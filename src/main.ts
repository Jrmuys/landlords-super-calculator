import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdDcgLzu7OspH5cJ9GMThxR5WYvr384Zg",
  authDomain: "landlord-super-calculator.firebaseapp.com",
  projectId: "landlord-super-calculator",
  storageBucket: "landlord-super-calculator.appspot.com",
  messagingSenderId: "1008914820893",
  appId: "1:1008914820893:web:afb96c85390505ecccfbf4",
  measurementId: "G-8GKQVZXDXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
