import React, { useState } from "react";
import "../styles/App.css";

export default function App() {
    const [theme,setTheme]=useState('light');

    return (
        <div className="App" id={theme}>
            <h1>Newton School</h1>
            <div>
                <form>
                    <label>UserName</label>
                    <input></input>
                    <label>Password</label>
                    <input></input>
                    <button>Login</button>
                </form>
            </div>
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <input type="checkbox" id="switch" onChange={()=>setTheme((prevTheme)=>(prevTheme==='light'?'dark':'light'))}/>
            <label for="switch" className="label">
                Toggle
            </label>
        </div>
    );
}
