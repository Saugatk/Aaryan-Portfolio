// Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDF6ZK01OoFyKOGYMwDHteMLwZ5vgKbDNU",
      authDomain: "saugat-portfolio.firebaseapp.com",
      projectId: "saugat-portfolio",
      storageBucket: "saugat-portfolio.firebasestorage.app",
      messagingSenderId: "107002417363",
      appId: "1:107002417363:web:0f1876c4aa4bae10668426",
      measurementId: "G-FH3EDT4GKP"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    export { app, analytics };
