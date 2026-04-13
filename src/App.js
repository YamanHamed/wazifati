import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Policies from "./pages/Policies";
import AddAdv from "./pages/AddAdv";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="policies" element={<Policies />} />
          <Route path="addadv/:type" element={<AddAdv />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
