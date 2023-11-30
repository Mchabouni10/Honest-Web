import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Allwipes from "./components/Allwipes";
import Nav1 from "./components/Nav1";
import Buildgift from "./components/Buildgift";
import Holidaygifts from "./components/Holidaygifts";
import TrendingNow from "./components/TrendingNow";
import Subscriptions from "./components/Subscriptions";
import Clean from './components/Clean';
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav1 /> */}
        {/* <Buildgift />
        <Holidaygifts />
        <TrendingNow />
        <Allwipes /> */}
        <Routes>
          {/* <Route path="/buildgift" component={Buildgift} />
          <Route path="/holidaygifts" component={Holidaygifts} />
          <Route path="/trendingnow" component={TrendingNow} /> */}
          <Route path='/' element={<Home/>}/>
          <Route path='/cleaning' element={<Clean/>}/>
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/Wipes" element={<Allwipes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
