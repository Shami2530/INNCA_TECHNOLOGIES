import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home/Home";
import Career from "./pages/Career/Career";
import InnovativeSolutions from "./pages/InnovativeSolutions/InnovativeSolutions";
import Future from "./pages/Future/Future";
import Founder from "./pages/Founder/Founder";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/career" element={<Career />} />

        <Route
          path="/innovative-solutions"
          element={<InnovativeSolutions />}
        />

        <Route path="/future" element={<Future />} />

        <Route path="/founder" element={<Founder />} />

        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div style={{ padding: "120px 40px", color: "white" }}>
              <h1>404</h1>
              <p>Page not found.</p>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;