import React, { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="App">
      <div className="modal" onClick={() => setOpen(true)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h1>User Details Modal</h1>

          {open ? (
            <button onClick={() => setOpen(false)}>Open Form</button>
          ) : (
            <>
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

                <button
                  className="submit-button"
                  type="submit"
                  onClick={() => setOpen(true)}
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
