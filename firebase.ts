import { getApp,getApps,initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDbY4FzM4RrLvmQqcC-0hNs6BXmRJ0x9-E",
  authDomain: "chatgpt-f92d3.firebaseapp.com",
  projectId: "chatgpt-f92d3",
  storageBucket: "chatgpt-f92d3.appspot.com",
  messagingSenderId: "475596848527",
  appId: "1:475596848527:web:5007d329c427d326075ffa"
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}