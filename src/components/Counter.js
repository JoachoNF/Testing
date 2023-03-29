import React, { useState } from 'react'
import Boton from './Boton'
import Styles from './Style.module.css'
const Counter = (props) => {

    const [productAmount , setProdAmount] = useState(1);
    const sumarPA = ()=>{
        props.stock > productAmount && 
        setProdAmount(productAmount + 1 )
    };
    const restarPA = ()=>{
        1 < productAmount &&
        setProdAmount(productAmount - 1);
    };


  return (
    <div>
        <blockquote
        className={Styles.block}
        >
            <Boton  className={Styles.button} name='+' click={sumarPA}/>
                <h2 style={{cursor:'default'}}>{productAmount}</h2>
            <Boton  className={Styles.button} name='-' click={restarPA}/>

        </blockquote>
    </div>
  )
}

export default Counter