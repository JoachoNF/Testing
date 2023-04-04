import React from 'react'
import { Link } from 'react-router-dom'
//import Boton from './Boton';
import Styles from '../Style.module.css'
const Header = () => {
  /*const click = ()=>{
    console.log('click')
  }*/

  return (
        <div className={Styles.Header}>          
          {/*<Boton click={click} name='mouseover'/>*/}
            <Link to='/' className={Styles.Icon}>
              <img src='logo192.png' alt='Logo'></img>
            </Link>
          <ul className={Styles.Navbar}>
            <>
            <Link style={{margin:'5px'}} to='/Exoplanetas'>Exoplanetas</Link>
            <Link style={{margin:'5px'}} to='/Exoplanetas/Confirmed'>Confirmed</Link>
            <Link style={{margin:'5px'}} to='/Exoplanetas/Confirmed/MXS'>Maximos Puntajes</Link>
            </>

          </ul>
        </div>
  )
}
//onMouseOver={changeColor()} onClick={changeColor()}

export default Header