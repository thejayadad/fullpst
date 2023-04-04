

import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Detail from "./pages/Detail";


function App() {
  return (
    <div className="h-screen max-w-screen-lg m-auto bg-slate-300">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />

        </Routes>
    </div>
  );
}

export default App;
