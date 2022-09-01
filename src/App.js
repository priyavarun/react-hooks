import UseStateHookExample from "./useStateHook";
import UseEffectHookExample from "./useEffectHook";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/state" element={<UseStateHookExample />} />
        <Route path="/effect" element={<UseEffectHookExample />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
