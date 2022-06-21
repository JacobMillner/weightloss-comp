import logo from "./logo.svg";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
        </Stack>
      </header>
    </div>
  );
}

export default App;
