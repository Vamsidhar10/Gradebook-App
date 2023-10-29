import Constants from 'expo-constants';
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { initializeAuth, getReactNativePersistence, indexedDBLocalPersistence } from 'firebase/auth';


const { apiKey,authDomain,projectId,storageBucket,messagingSenderId, appId } = Constants.expoConfig.extra;

const firebaseConfig = {
    "apiKey": apiKey,
    "authDomain": authDomain,
    "projectId": projectId,
    "storageBucket": storageBucket,
    "messagingSenderId":messagingSenderId,
    "appId": appId
  };
  
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: indexedDBLocalPersistence
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
