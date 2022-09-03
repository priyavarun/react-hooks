import React from "react";
import UseStateHookExample from "./useStateHook";
import UseEffectHookExample from "./useEffectHook";
import UseContextExample from "./useContext";
import UseRefHookExample from "./useRefHook";
import UseReducerHook from "./useReducerHook";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ThemeProvider from "./wrappedContextProvider";
import UseMemo from "./useMemoHook";
import UseLayoutHook from "./UseLayoutHook";
import UseImperativeHandleHook from "./UseImperativeHandleHook";
import UseCallbackHook from "./UseCallbackHook";

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
            <Route path="/reducer" element={<UseReducerHook />} />
            <Route path="/memo" element={<UseMemo />} />
            <Route path="/layout" element={<UseLayoutHook />} />
            <Route path="/imperative" element={<UseImperativeHandleHook />} />
            <Route path="/callback" element={<UseCallbackHook />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
