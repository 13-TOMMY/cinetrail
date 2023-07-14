import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeContextProvider from './context/ThemeContext';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import './App.css'

function App() {

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_API_URL;

  return (
    <BrowserRouter>
      <ThemeContextProvider>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage apiKey={apiKey} baseUrl={baseUrl}/>} />
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
