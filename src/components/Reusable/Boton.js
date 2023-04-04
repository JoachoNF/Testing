import React,{useState}from 'react'

const Boton = (props) => {
    const [colorOnMouse,setColorOnMouse] = useState('black')

    const changeColorIn=()=>{
        setColorOnMouse('red')
    }
    const changeColorOut=()=>{
        setColorOnMouse('black')
    }
  return (
    <button
    onMouseOver={changeColorIn}
    onMouseLeave={changeColorOut} 
    style={{
        color:colorOnMouse,
        backgroundColor:'white',
        cursor:'pointer'
    }} 
    onClick={props.click}
    >  
        {props.name}
    </button>
  )
}

export default Boton