// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  Timestamp,
  addDoc,
  collection,
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log(process.env.NEXT_PUBLIC_FIREBASE_api);
console.log(process.env.FIREBASE_api);

const firebaseConfig = {
  process: process.env.NEXT_PUBLIC_FIREBASE_api,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

const mail_ref = collection(firestore, "mail");
const waitlist_ref = collection(firestore, "waitlist");

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Joining Our Waitlist</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 50px auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
    }
    .header img {
      max-width: 100px;
    }
    .title {
      margin: 0;
      color: #333;
      text-decoration: underline 3px;
      text-decoration-color: #4E1FC2;
    }
    .content {
      text-align: center;
      color: #555;
    }
    .content p {
      line-height: 1.6;
    }
    .specailS{
    	color:#4E1FC2
    }
    .footer {
      text-align: center;
      padding-top: 20px;
      color: #999;
      font-size: 12px;
    }
    .button {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #007bff;
      color: #ffffff;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://i.ibb.co/qRWszYN/shop-Simple-Logo.png" alt="App Logo">
      <h1 class="title">Thank You for Joining ShopSimple!</h1>

    </div>
    <div class="content">
      <p>Hi there,</p>
      <p>Thank you for joining🎉 the waitlist for ShopSimple! We're excited to have you on board.</p>
      <p>Stay tuned for future updates and exclusive offers. We're working hard to bring you the best experience possible.</p>
     
    </div>
    
  </div>
</body>
</html>`;

export async function writetomail(email) {
  const docData = {
    to: [email],
    message: {
      subject: "Hello from ShopSimple",
      html: htmlContent,
    },
  };
  const newDoc = await addDoc(mail_ref, docData);
  //   console.log("email sent");
}

export async function saveUser(value) {
  const docRef = doc(firestore, "waitlist/" + value);
  //   console.log(getDoc(docRef));
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    await setDoc(docRef, {
      email: value,
      timestamp: Timestamp.now(),
    });
    writetomail(value);
  } else {
    console.log("user exist");
  }
}
