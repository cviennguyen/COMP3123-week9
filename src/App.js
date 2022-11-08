import logo from "./logo.svg";
import "./App.css";
import Wellcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Wellcome
          title="Welcome to Fullstack Development - 1"
          subtitle="React JS Programming Week9 Lab Exercise"
          id="101347350"
          name="Vien Nguyen"
          school="Georgebrown College, Toronto"
        />
      </header>
    </div>
  );
}

export default App;
