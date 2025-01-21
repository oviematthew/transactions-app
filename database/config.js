import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "info6127-1146253-class.firebaseapp.com",
  databaseURL: "https://info6127-1146253-class-default-rtdb.firebaseio.com",
  projectId: "info6127-1146253-class",
  storageBucket: "info6127-1146253-class.appspot.com",
  messagingSenderId: "754130795212",
  appId: "1:754130795212:web:1eecc43e84198450282069",
};

// Initialize Firebase
export const db = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(db);
export const dbCollection = collection(firestoreDb, "transactions");

//read from database function
export function load() {
  const data = [];

  return new Promise((resolve, reject) => {
    getDocs(dbCollection)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const transactions = {
            ...doc.data(),
            id: doc.id,
          };

          data.push(transactions);
        });

        resolve(data);
      })
      .catch((error) => {
        console.log("Error:", error);
        reject(error);
      });
  });
}
