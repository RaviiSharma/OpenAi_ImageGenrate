import React, { useState } from "react";
import Logo from "./Logo";

const Main = () => {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("large");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    setErrorMessage("");

    if (prompt === "") {
      alert("Please add some text");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/generateImage", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          prompt,
          size,
        }),
      });

      if (!response.ok) {
        throw new Error("That image could not be generated");
      }

      const data = await response.json();

      setImageUrl(data.data);
    } catch (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  return (
    <main>
      <Logo />
      <section className="showcase">
        <form id="image-form">
          <h1 style={{ marginTop: "10px" }}>Describe an Image</h1>
          <div className="form-control">
            <input
              type="text"
              id="prompt"
              placeholder="Enter Text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <div className="form-control">
            <select
              name="size"
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Generate Image
          </button>
        </form>
      </section>
      {prompt === "" && !loading && (
        <p className="desPara">
          <h3>How to use??🤔</h3>
          <li>Elaborate your desired Image in abobve input field</li>
          <li>Select size from dropdown</li>
          <li>
            Click on <span style={{ fontStyle: "italic" }}>Generate Image</span>
          </li>
          <li>Wait for few seconds and see magic...😯</li>
        </p>
      )}
      {loading && prompt != "" && <div className="spinner">Generating...</div>}
      {errorMessage && prompt != "" && (
        <div className="error">{`${errorMessage}. KEY is expired, contact the author.`}</div>
      )}
      {imageUrl && (
        <section className="image">
          <div className="image-container">
            <img src={imageUrl} alt="" id="image" />
          </div>
        </section>
      )}
    </main>
  );
};

export default Main;
