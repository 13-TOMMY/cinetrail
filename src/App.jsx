import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CombinedContextProvider from "./contexts/index";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage/Homepage";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  return (
    <>
      <BrowserRouter>
        <CombinedContextProvider>
          <Header />
          <Header baseUrl={baseUrl} apiKey={apiKey} />
          <Routes>
            <Route
              path={"/movieDetails/:movieid"}
              element={
                <MovieDetails
                  serverUrl={serverUrl}
                  baseUrl={baseUrl}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path={"/myFavorites"}
              element={
                <Favorites
                  serverUrl={serverUrl}
                  baseUrl={baseUrl}
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path={"/signup"}
              element={<SignUp serverUrl={serverUrl} />}
            />
            <Route
              path={"/signin"}
              element={<SignIn serverUrl={serverUrl} />}
            />
            <Route
              path={"*"}
              element={<Homepage baseUrl={baseUrl} apiKey={apiKey} />}
            />
          </Routes>
          <Footer />
        </CombinedContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
