import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importing PrimeReact's core CSS and theme
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Choose the theme you prefer
import "primereact/resources/primereact.min.css"; // PrimeReact core styles

import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
