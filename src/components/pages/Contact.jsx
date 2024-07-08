import { validateEmail } from "../../utils/helpers";
import { useState } from "react";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //this handles the changes in inputs, basically every time an input changes, this fires. it checks the name of the updated field and then updates the state variables.
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
    //this handles the submitted data, checks if there are any errors with it, and if not simply sends an alert acknowledging that the message was received.
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
    <div className="bg-isabelline-500 p-6">
      <form className="w-full max-w-lg" onSubmit={handleFormSubmit} noValidate>
        <h1 className="pb-5">Contact Me</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email"
            >
              email
            </label>
            <input
            name='email'
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-email"
              type="email"
              placeholder="johndoe@example.com"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-name"
            >
              Name
            </label>
            <input
            name='name'
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-name"
              type="text"
              placeholder="John Doe"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-message"
            >
              Message
            </label>
            <input
            name='message'
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-message"
              type="text"
              placeholder="What can I help you with?"
              onChange={handleInputChange}
            />
          </div>

        </div>
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
