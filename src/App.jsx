import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { FirstComponent } from './FirstComponent'
import { Funciones } from './Funciones'
import { HelloWorld } from './HelloWorld'
import { Render2 } from './Render2'
import { Renderizado } from './Renderizado'

function App() {
  const [count, setCount] = useState(0)

  const [ejemploActivo, setEjemploActivo] = useState('Inicio')

  const renderComponente = () => {
    switch (ejemploActivo) {
      case 'FirstComponent': return <FirstComponent />
      case 'Funciones':     return <Funciones />
      case 'HelloWorld':    return <HelloWorld />
      case 'Render2':       return <Render2 />
      case 'Renderizado':   return <Renderizado />
      default:
        return (
          <p style={{ fontStyle: 'italic', margin: 0 }}>
            Selecciona uno de los laboratorios en la parte inferior para visualizar su contenido en este espacio.
          </p>
        )
    }
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Raúl Martín Cori Cañaviri</h1>
          
          <div style={{ 
            margin: '24px auto 0 auto', 
            minHeight: '120px', 
            border: '2px dashed var(--accent)', 
            padding: '20px', 
            borderRadius: '8px', 
            backgroundColor: 'var(--code-bg)',
            textAlign: 'center',
            maxWidth: '500px',
            boxSizing: 'border-box'
          }}>
            <h3 style={{ marginTop: 0, color: 'var(--accent)', fontSize: '1.1rem', fontFamily: 'var(--sans)' }}>
              Vista Activa: {ejemploActivo}
            </h3>
            <hr style={{ borderColor: 'var(--border)', marginBottom: '15px' }} />
            <div style={{ color: 'var(--text-h)' }}>
              {renderComponente()}
            </div>
          </div>
        </div>
        
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

  
      <section id="next-steps">
        
     
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Ejemplos Básicos</h2>
          <p>Estructuras y funciones iniciales</p>
          <ul>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setEjemploActivo('HelloWorld') }}>
                <img className="button-icon" src={reactLogo} alt="" />
                HelloWorld
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setEjemploActivo('FirstComponent') }}>
                <img className="logo" src={viteLogo} alt="" />
                FirstComponent
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setEjemploActivo('Funciones') }}>
                <img className="button-icon" src={reactLogo} alt="" />
                Funciones
              </a>
            </li>
          </ul>
        </div>

      
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Ejemplos de Render</h2>
          <p>Control de vistas y condicionales</p>
          <ul>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setEjemploActivo('Render2') }}>
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                Render2
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setEjemploActivo('Renderizado') }}>
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Renderizado
              </a>
            </li>
          </ul>
        </div>
        
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
