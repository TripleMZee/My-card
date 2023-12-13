import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="business-card">
      <div className="card">
        <div className="front">
          <img src="/src/wallpaper.jpg" alt="Profile" />
          <h1>Ibrahim Abdulhafeez Bolarinwa</h1>
          <h2>Front-End Web Developer</h2>
        </div>

        <div className="contact-info">
          <p>
            <a href="mailto=herbdul8@gmail.com">
              <strong>Email:</strong> herbdul8@gmail.com
            </a>
          </p>
          <p>
            <a href="https://www.x.com/_zeeder_">
              <strong>Twitter:</strong> @_zeeder_
            </a>
          </p>
          <p>
            <a href="https://www.github.com/triplemzee">
              <strong>GitHub:</strong> @Triplemzee
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
