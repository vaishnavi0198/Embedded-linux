import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IP_ADDRESS } from "../constants";

function JournalList() {
  const [journals, setJournals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${IP_ADDRESS}/api/journals`)
      .then((res) => setJournals(res.data));
  }, []);

  const handleAdd = () => {
    navigate("/editor");
  };

  const handleEdit = (id) => {
    navigate(`/editor/${id}`);
  };

  return (
    <div
      className="grid"
      style={{ display: "flex", justifyContent: "center", alignItem: "center" }}
    >
      {journals.map((j) => (
        <div
          style={{
            margin: "31px",
            padding: "20px",
            boxShadow: "2px 2px 2px 2px gray",
            color: "green",
            cursor: "pointer",
          }}
          key={j.id}
          onClick={() => handleEdit(j.id)}
        >
          {new Date(j.date_created).toLocaleDateString()}
        </div>
      ))}
      <div
        style={{
          margin: "31px",
          padding: "20px",
          boxShadow: "2px 2px 2px 2px gray",
          color: "green",
          cursor: "pointer",
        }}
        onClick={handleAdd}
      >
        +
      </div>
    </div>
  );
}
export default JournalList;
