import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App(): React.JSX.Element {

  return (
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Autofeedback</h1>
        </div>
        <h2>Add site url</h2>
        <label htmlFor="input_url"></label>
        <input type="url" id="input_url" size={100} required placeholder='Add site url' pattern="https://.*"/>
      </section>
  )
}
export default App;
