import React, { useEffect, useState } from 'react';

const CardContainer = () => {
  
    //logica de request de productos
    //const URL = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_masse,ra,dec+from+ps+where+pl_masse<3&format=json'
    //const URL = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&where=koi_disposition like \'CANDIDATE\' and koi_period>300 and koi_prad<2&format=json';
    const URL = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&select=kepid,kepoi_name,koi_disposition,koi_score,koi_teq,koi_period,koi_prad&where=koi_score>0 and koi_period<450 and koi_period>300 and koi_prad<2 and koi_teq<300 and koi_teq>-200&order=koi_disposition,koi_teq&format=json';
    const URLConfirmed = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&select=kepid,kepoi_name,koi_disposition,koi_score,koi_teq,koi_period,koi_prad&where=koi_disposition like \'CONFIRMED\' and koi_score>0 and koi_teq<300 and koi_teq>-200&order=koi_disposition,koi_score,koi_teq&format=json'
    const URLConfirmedMXScore = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&select=kepid,kepoi_name,koi_disposition,koi_score,koi_teq,koi_period,koi_prad&where=koi_disposition like \'CONFIRMED\' and koi_score=1 and koi_teq<400&order=koi_disposition,koi_score,koi_teq&format=json'
    
    const [items,setItem] = useState([]);

    useEffect(()=>{
      fetch(URL)
      .then(res => res.json())
      .then(res => setItem(res))
      .catch((err) => console.log(err));
    },[])

    /*
    fetch( URLConfirmed)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch((err) => console.log(err));

    fetch( URLConfirmedMXScore)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch((err) => console.log(err));
    */
  return (
    <div>
        <h2>Exoplanetas</h2>
          {
            items.map((exo)=>{
            if(exo.koi_disposition!='FALSE POSITIVE'){ 
            return(
              <div key={exo.kepid}>
                <h3>Exoplaneta {exo.kepoi_name} {exo.koi_disposition}</h3>
                <h5>Temperatura: {exo.koi_teq - 273}°C</h5>
                <h5>Periodo orbital: {exo.koi_period} dias</h5>
              </div>
            )}else
            console.log(exo.koi_disposition)
          })
          }
    </div>
  )
}

export default CardContainer