import React from "react";

const Header = () => {
  return (
    <header className="navbar">
      <div className="nav-links">
        <ul>
          <li>
            <a href="https://beta.openai.com/docs" target="_blank">
              OpenAI API Docs
            </a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <h2>VisionaryAI-Image Generator</h2>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a
              href="https://github.com/mahtoaman/VisinoryAI-front-end"
              target="_blank"
            >
              About Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
