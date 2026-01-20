import React, { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Styles
  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dimmed background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalContentStyle = {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    width: "400px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Details Modal</h1>

      {/* Open Button: Shown only when modal is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Open Form
        </button>
      )}

      {/* Modal Overlay: Clicking here closes the modal */}
      {isOpen && (
        <div
          className="modal"
          style={modalOverlayStyle}
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content: e.stopPropagation() prevents click from reaching the overlay */}
          <div
            className="modal-content"
            style={modalContentStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Fill Details</h3>

            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div>
                <label htmlFor="username">
                  <b>Username:</b>
                </label>
                <br />
                <input
                  type="text"
                  id="username"
                  style={{ width: "300px", padding: "8px" }}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">
                  <b>Email Address:</b>
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  style={{ width: "300px", padding: "8px" }}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">
                  <b>Phone Number:</b>
                </label>
                <br />
                <input
                  type="tel"
                  id="phone"
                  style={{ width: "300px", padding: "8px" }}
                  required
                />
              </div>

              <div>
                <label htmlFor="dob">
                  <b>Date of Birth:</b>
                </label>
                <br />
                <input
                  type="date"
                  id="dob"
                  style={{ width: "300px", padding: "8px" }}
                  required
                />
              </div>

              <button
                className="submit-button"
                type="submit"
                style={{
                  marginTop: "10px",
                  padding: "10px 25px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
