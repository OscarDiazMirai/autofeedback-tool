import React from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'
import heroImg from '@/assets/hero.png'
import classes from './app.module.css'


function App(): React.JSX.Element {

  return (
      <section className={classes.center}>
        <div className={classes.hero}>
          <img src={heroImg} className={classes.base} width="170" height="179" alt="" />
          <img src={reactLogo} className={classes.framework} alt="React logo" />
          <img src={viteLogo} className={classes.vite} alt="Vite logo" />
        </div>
        <div>
          {/* <h1>Autofeedback</h1> */}
        </div>
        <h2>Add site url</h2>
        <label htmlFor="input_url"></label>
        <input type="url" id="input_url" size={100} required placeholder='Add site url' pattern="https://.*"/>
        <button type='button' title='Start autofeedback' disabled>Start</button>
      </section>
  )
}
export default App;
