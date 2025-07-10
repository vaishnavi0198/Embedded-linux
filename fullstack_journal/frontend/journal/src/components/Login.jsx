import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(username, password);
      const res = await axios.post("/api/login", { username, password });
      if (res.data.success) {
        navigate("/journals");
      }
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        width: "100vw",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          border: "2px solid green",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          minWidth: "300px",
          alignItems: "center",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          background: "white",
        }}
      >
        <h2 style={{ color: "green", marginBottom: "20px" }}>Login</h2>

        <div style={{ width: "100%" }}>
          <label
            style={{ display: "block", marginBottom: "5px", color: "green" }}
          >
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid green",
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ width: "100%" }}>
          <label
            style={{ display: "block", marginBottom: "5px", color: "green" }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid green",
              borderRadius: "4px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "white",
            border: "2px solid green",
            color: "green",
            cursor: "pointer",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;
