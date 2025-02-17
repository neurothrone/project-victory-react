import {useEffect, useRef, useState} from "react";
import "./LoginPage.css";

function LoginPage(props) {
  const [userInput, setUserInput] = useState("");
  const inputRef = useRef(null);
  // eslint-disable-next-line react/prop-types
  const {setUsername} = props;

  useEffect(() => {
    document.body.classList.add("login-page-body");
    return () => {
      document.body.classList.remove("login-page-body");
    };
  }, []);

  function isValidInput() {
    return userInput.trim().length > 0;
  }

  function clickHandler() {
    setUsername(userInput);
  }

  return (
    <div className="login-container">
      <h1 className="mb-4">Project Victory</h1>

      <div className="input-group mb-3">
        <label htmlFor="messageInput" className="visually-hidden">Message</label>
        <input type="text"
               id="messageInput"
               ref={inputRef}
               className="form-control"
               placeholder="Enter username"
               autoComplete="off"
               tabIndex="1"
               value={userInput}
               onChange={(e) => setUserInput(e.target.value)}
               onKeyDown={(e) => {
                 if (e.key === "Enter" && isValidInput()) {
                   clickHandler();
                 }
               }}/>
        <button id="sendButton"
                className="btn"
                tabIndex="2"
                disabled={!isValidInput()}
                onClick={clickHandler}>
          Enter Chat
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
