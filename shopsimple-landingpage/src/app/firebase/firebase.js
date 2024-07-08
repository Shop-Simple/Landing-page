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
const firebaseConfig = {
  apiKey: "AIzaSyD9VQmGKuFQJR-Bb8oFi0w_iAj7s3ZzYtI",
  authDomain: "shopsimple-f7481.firebaseapp.com",
  projectId: "shopsimple-f7481",
  storageBucket: "shopsimple-f7481.appspot.com",
  messagingSenderId: "643799339918",
  appId: "1:643799339918:web:7592df53fe3d9b0ecfcadf",
  measurementId: "G-HDEQCCLLXH",
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
      display:flex;
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
      <h1 class="title">Thank You for Joining &nbsp<p class="title specailS">S</p>hop<p class="title specailS">S </p>imple! 🎉🎉</h1>
    </div>
    <div class="content">
      <p>Hi there,</p>
      <p>Thank you for joining🎉 the waitlist for ShopSimple! We're excited to have you on board.</p>
      <p>Stay tuned for future updates and exclusive offers. We're working hard to bring you the best experience possible.</p>
      <p>If you have any questions or need assistance, feel free to reach out to us.</p>
      <a href="YOUR_SUPPORT_URL" class="button">Contact Support</a>
    </div>
    <div class="footer">
      <p>&copy; 2024 ShopSimple. All rights reserved.</p>
      <p>1234 Market Street, Suite 100, San Francisco, CA 94103</p>
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
  console.log(getDoc(docRef));
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
