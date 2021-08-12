import './App.css';
import React from "react";
import {useRoutes} from "hookrouter";
import routes from "./utils/Routes";

function App() {
    const routeResult = useRoutes(routes);
  return (
      <div className="App">
          {routeResult}
          <footer>
              <div>Copyright</div>
          </footer>
      </div>
  );
}

export default App;
