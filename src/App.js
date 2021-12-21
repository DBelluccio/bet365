import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import Home from './Home';
import HeaderSection from './components/header';
import MatchesSection from './components/matches';
import TeamsSection from './components/teams';
import ContactHome from './components/contact';
import FooterSection from './components/footer';
import UpcomingMatches from './screens/upcomingMatches';
import bootstrap from 'bootstrap';
import reactDom from 'react-dom';
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./css/responsive.css";
import "./css/owl.carousel.min.css";


function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
      <main className="App">
  <React.Fragment>
    <HeaderSection />
    <MatchesSection />
    <TeamsSection />
    <ContactHome />
    <FooterSection />
  </React.Fragment>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/matches" element={<UpcomingMatches />} />
      </Routes>
      </main>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
