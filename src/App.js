
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects"
import Skills from "./components/Skills"

import {HashRouter, BrowserRouter, Route, Routes} from "react-router-dom"

export default function App() {
  return (
    <div className="App"> 
        <HashRouter>
        <Routes>
          <Route path="/Portfolio" element={<Dashboard />} />
          <Route path="/Porfolio/projects" element={<Projects />} />
          <Route path="/Portfolio/skills" element={<Skills />} />

          
        </Routes>
        </HashRouter>
    </div>
  );
}