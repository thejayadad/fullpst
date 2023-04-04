

import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"


function App() {
  return (
    <div className="h-screen max-w-screen-lg m-auto bg-slate-300">
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
