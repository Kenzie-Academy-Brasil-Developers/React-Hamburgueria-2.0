import React from "react";
import logo from "./logo.svg";
import { RoutesMain } from "./routes";
import { Providers } from "./contexts/Providers";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Providers>
        <RoutesMain />
      </Providers>
    </div>
  );
}

export default App;
