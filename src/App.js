import { Weather } from "./Components";
import "./Components/Weather/Weather.css";

function App() {
  return (
    <div className="App">
      <div className="container container-weather">
        <Weather />
      </div>
    </div>
  );
}

export default App;
