import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <Header />
          <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"/movieDetails/:movieId"} element={<MovieDetails />} />
            <Route path={"*"} element={<Homepage />} />
          </Routes>
          <Footer />
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
