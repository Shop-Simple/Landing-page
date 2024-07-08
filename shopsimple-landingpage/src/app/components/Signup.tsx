"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/signup.css";
import LastMessage from "./LastMessage";
import { writetomail, saveUser } from "@/app/firebase/firebase";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    setIsValidEmail(validateEmail(email));
    console.log("Email:", email);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    console.log("Form submitted");
    e.preventDefault();
    if (!isValidEmail) return;

    //add to db
    saveUser(email);
    // Simulate database entry
    console.log("Form submitted with email:", email);

    // After successful submission, update the submission status
    setIsSubmitted(true);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  if (isSubmitted) {
    return <LastMessage />;
  }

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen">
      <h1 className="text-4xl text-extrabold m-5">Join us in</h1>
      <img src="/ShopSimpleLogo.svg" alt="Logo" />
      <h2 className="md:text-2xl sm:text-sm m-5">
        Sign up to get early access + update{" "}
      </h2>

      <div className="Searchcontainer">
        <input
          type="text"
          value={email}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter your email"
          className="input"
        />
        <button
          className={`searchButton ${isValidEmail ? "active" : ""}`}
          type="submit"
          disabled={!isValidEmail}
          onClick={handleSubmit}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};

export default Signup;
