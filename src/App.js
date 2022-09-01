import React from "react";
import UseStateHookExample from "./useStateHook";
import UseEffectHookExample from "./useEffectHook";
import UseContextExample from "./useContext";
import UseRefHookExample from "./useRefHook";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ThemeProvider from "./wrappedContextProvider";


function App() {
  return (
    <div>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/state" element={<UseStateHookExample />} />
            <Route path="/effect" element={<UseEffectHookExample />} />
            <Route path="/context" element={<UseContextExample />} />
            <Route path="/ref" element={<UseRefHookExample />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
