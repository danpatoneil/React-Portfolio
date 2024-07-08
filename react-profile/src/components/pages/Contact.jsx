import { validateEmail } from "../../utils/helpers";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType == "email") {
      setEmail(inputValue);
    } else if (inputType == "name") {
      setName(inputValue);
    } else if (inputType == "message") {
      setMessage(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMessage("Name cannot be left blank");
      return;
    } else if (!message) {
      setErrorMessage("Message cannot be left blank");
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage("email address provided is invalid");
      return;
    }
    alert(
      `Thank you for your interest, ${name}.I will get back to you as soon as I can. Unfortunately, this functionality is still under construction so this message goes nowhere.`
    );
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={email}
          placeholder="email"
        />
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={name}
          placeholder="name"
        />
        <input
          type="text"
          name="message"
          onChange={handleInputChange}
          value={message}
          placeholder="message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
