import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import JournalList from "./components/JournalList";
import JournalEditor from "./components/JournalEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/journals" element={<JournalList />} />
        <Route path="/editor" element={<JournalEditor />} />
        <Route path="/editor/:id" element={<JournalEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
