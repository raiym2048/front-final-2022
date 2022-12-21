import React from "react";
import {useNavigate} from "react-router-dom";
import logo from '../assets/images/img.png';
const Home = () => {
    let navigate = useNavigate()

    return(
        <div className='w-full h-screen text-center '>
            <img className='App-logo p-5' src={logo} alt="logo"/>
            <button onClick={() => {
                navigate(('/front-final-2022/country'))
            }}
                    className='text-red-900 hover:text-purple-800 transition-colors easy-in-out duration-300 p-2 border-solid border-2 border-b-amber-400 rounded-xl text-2xl'>
                change to country page
            </button>
        </div>
    );
}

export default Home