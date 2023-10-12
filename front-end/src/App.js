import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SongList from "./components/SongList";
import CreateSong from "./components/CreateSong";
import Footer from "./components/Footer";
import AboutPage from "./components/About";
import styled from "@emotion/styled";

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SongList />} />
          <Route path="/create" element={<CreateSong />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
