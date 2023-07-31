import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";


function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <Header />
          <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"/movieDetails/:movieId"} element={<MovieDetails />} />
            <Route path={"/signup"} element={<SignUp />} />
            <Route path={"/signin"} element={<SignIn />} />
            <Route path={"*"} element={<Homepage />} />
          </Routes>
          <Footer />
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
