import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavBar />
      </div>
      <Products />
    </div>
  );
}
export default App;
