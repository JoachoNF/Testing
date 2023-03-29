import React from 'react'
import Boton from './Boton';
import Styles from './Style.module.css'
const Header = () => {
  const click = ()=>{
    console.log('click')
  }

  return (
        <div className={Styles.Header}>
            <Boton click={click} name='mouseover'/>
        </div>
        
  )
}
//onMouseOver={changeColor()} onClick={changeColor()}

export default Header