import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Country from "./components/Country";
import Game from "./components/Game";
import Home from "./components/home";
const App = () => {
  return <Router>
    <nav id='navBar' className='p-3' >
      <Link to ='/front-final-2022/' className='p-7 text-black hover:text-purple-800 transition-colors easy-in-out duration-300 ' >home</Link>
      <Link to ='/front-final-2022/game' className='p-7 text-black hover:text-purple-800 transition-colors easy-in-out duration-300 ' >game</Link>
      <Link to ='/front-final-2022/country' className='p-7 text-black hover:text-purple-800 transition-colors easy-in-out duration-300' >country</Link>
    </nav>



    <Routes >
      <Route path='/front-final-2022/' element=<Home/> />
      <Route path='/front-final-2022/game' element=<Game/> />
      <Route path='/front-final-2022/country' element=<Country/> />
    </Routes>

    <footer>
      <div>
        <p className='text-center' id='copyRight'>&copy; 2022 Rayimbek Daniiar uulu</p>
      </div>
    </footer>
  </Router>;
}

export default App;
