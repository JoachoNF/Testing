import React from 'react'

const CardContainer = () => {
    //logica de request de productos
    fetch('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative')
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    
  return (
    <div>
        
    </div>
  )
}

export default CardContainer