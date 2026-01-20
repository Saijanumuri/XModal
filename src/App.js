import React, { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      {/* Open button */}
      <button onClick={() => setIsOpen(true)}>Open Form</button>

      {/* Modal */}
      {isOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsOpen(false)} // click outside → close
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // inside click → ignore
          >
            <h1>User Details Modal</h1>
            <h3>Fill Details</h3>

            <form>
              <label htmlFor="username">Username:</label>
              <br />
              <input type="text" id="username" required />
              <br />

              <label htmlFor="email">Email Address:</label>
              <br />
              <input type="email" id="email" required />
              <br />

              <label htmlFor="phone">Phone Number:</label>
              <br />
              <input type="tel" id="phone" required />
              <br />

              <label htmlFor="dob">Date of Birth:</label>
              <br />
              <input type="date" id="dob" required />
              <br />

              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
