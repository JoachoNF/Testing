import React from 'react'

const DetailContent = ({exo}) => {

  const exoArray = Object.entries(exo)

  return (

    <>
    <h2>Exoplaneta {exo.kepoi_name}</h2>
    {exoArray.map
    ((element)=>{
        return(
            <div key={element.toString()}>
            <h3>
            {element[0].slice(element[0].indexOf('_')+1,element[0].length)} = {element[1]}
            </h3>        
            </div>
        )
    })}
    
    </>


  )
}

export default DetailContent