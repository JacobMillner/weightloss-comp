import logo from "./logo.svg";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();
  const handleNew = () => {
    nav("/new");
  };
  const handleView = () => {
    nav("/view");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Weight loss competition</p>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={handleNew}>
            New
          </Button>
          <Button variant="outlined" onClick={handleView}>
            View
          </Button>
        </Stack>
      </header>
    </div>
  );
}

export default App;
