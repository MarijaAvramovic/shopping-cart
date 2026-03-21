import { useState } from 'react'
 import './App.css';
import NavBar from './components/NavBar.jsx'
import { Outlet } from 'react-router-dom';
 
 

function App() {

    return (
        <div className="App">
            <NavBar />
            <main>
                <Outlet />
            </main>
             

            <footer> 
                <p>&copy; 2026 The Odin Project</p>
            </footer>
        </div>
    );
}

export default App
