import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import MyFavorites from "./pages/MyFavorites/MyFavorites";
import CombinedContextProvider from './contexts/index';


function App() {
  return (
    <>
      <BrowserRouter>
        <CombinedContextProvider>
          <Header />
          <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"/movieDetails/:movieId"} element={<MovieDetails />} />
            <Route path="/myfavorites" element={<MyFavorites />}/>
            <Route path={"/signup"} element={<SignUp />} />
            <Route path={"/signin"} element={<SignIn />} />
            <Route path={"*"} element={<Homepage />} />
          </Routes>
          <Footer />
        </CombinedContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
