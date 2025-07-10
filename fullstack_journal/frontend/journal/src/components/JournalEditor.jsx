import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function JournalEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entry, setEntry] = useState({ title: "", content: "" });

  useEffect(() => {
    if (id) {
      axios.get("/api/journals").then((res) => {
        const found = res.data.find((j) => j.id.toString() === id);
        if (found) setEntry(found);
      });
    } else {
      const today = new Date().toISOString();
      setEntry({ title: "", content: "", date_created: today });
    }
  }, [id]);

  const handleSave = async () => {
    if (id) {
      await axios.put(`/api/journals/${id}`, entry);
    } else {
      await axios.post("/api/journals", entry);
    }
    navigate("/journals");
  };

  const handleDelete = async () => {
    if (id) {
      await axios.delete(`/api/journals/${id}`);
    }
    navigate("/journals");
  };

  return (
    <div>
      <h2> {new Date(entry.date_created).toLocaleDateString()}</h2>
      <textarea
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "80vw",
          height: "80vh",
        }}
        value={entry.content}
        onChange={(e) => setEntry({ ...entry, content: e.target.value })}
      />
      <div>
        <button
          style={{
            boxShadow: "0.5px 4px 5px 1px gray",
            color: "white",
            backgroundColor: "green",
            margin: "2px",
          }}
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          style={{
            boxShadow: "0.5px 4px 5px 1px gray",
            color: "white",
            backgroundColor: "green",
            margin: "2px",
          }}
          onClick={() => navigate("/journals")}
        >
          Back
        </button>
        <button
          style={{
            boxShadow: "0.5px 4px 5px 1px gray",
            color: "white",
            backgroundColor: "green",
            margin: "2px",
          }}
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}
export default JournalEditor;
