import { useState, useEffect } from "react";

const API = `{YOUR_URL}/remove-bg`;

function App() {
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      preview && URL.revokeObjectURL(preview);
      result && URL.revokeObjectURL(result);
    };
  }, [preview, result]);

  const handleFile = (file) => {
    if (!file) return;
    setPhoto(file);
    setResult(null);
    setError("");
    setPreview(URL.createObjectURL(file));
  };

  const handleRemoveBackground = async () => {
    if (!photo) return;
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", photo);

      const res = await fetch(API, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Server error");

      const blob = await res.blob();
      setResult(URL.createObjectURL(blob));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="card fade-in">
        <h1>AI Background Remover</h1>
        <p className="subtitle">
          Upload image → AI removes background → download result
        </p>
        <label className="upload-box">
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => handleFile(e.target.files[0])}
          />
          {preview ? "Change image" : "Click to upload image"}
        </label>
        <div className="images">
          {preview && (
            <div className="image-card fade-in">
              <span>Original</span>
              <img src={preview} alt="Original" />
            </div>
          )}

          {result && (
            <div className="image-card fade-in">
              <span>Result</span>
              <img src={result} alt="Result" />
            </div>
          )}
        </div>
        <button
          className="primary-btn"
          disabled={!photo || loading}
          onClick={handleRemoveBackground}
        >
          {loading ? <span className="loader"></span> : "Remove background"}
        </button>

        {error && <p className="error">{error}</p>}

        {result && (
          <a href={result} download="no-bg.png" className="download">
            Download image ↓
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
