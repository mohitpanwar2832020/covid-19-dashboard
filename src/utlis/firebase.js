import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC-VMDOiPMzYCrVCBRP7nXOd1YPzlslP2g",
    authDomain: "covid-19-dashboard-9aca8.firebaseapp.com",
    projectId: "covid-19-dashboard-9aca8",
    storageBucket: "covid-19-dashboard-9aca8.appspot.com",
    messagingSenderId: "473908972564",
    appId: "1:473908972564:web:1dcd6327060b2b4674ab01"
  };
  firebase.initializeApp(config);

  export {firebase}