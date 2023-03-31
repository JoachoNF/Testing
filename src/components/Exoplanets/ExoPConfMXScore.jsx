import React, { useEffect, useState } from 'react';
import Styles from '.././Style.module.css'

const ExoPConfirmed = () => {
  const URL = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&select=kepid,kepoi_name,koi_disposition,koi_score,koi_teq,koi_period,koi_prad&where=koi_disposition like \'CONFIRMED\' and koi_score=1 and koi_teq<400&order=koi_disposition,koi_score,koi_teq&format=json'
    const [items,setItem] = useState([]);

    useEffect(()=>{
        fetch(URL)
        .then(res => res.json())
        .then(res => setItem(res))
        .catch((err) => console.log(err));
    },[])

    let falseP = {};
    let i=0;
  return (
    <div>
        <h1>Exoplanetas</h1>
        <h2>Filtros:
          {
            URL.slice(URL.indexOf('where')+6,URL.indexOf('&order')).split('and').map((element)=>{
              return(
              <h6 style={{margin:'5px'}}>
                {element}
              </h6>)
            })
          }
        </h2>

        <div className={Styles.CardContainer}>
          {
           
            items.map((exo)=>{
            if(exo.koi_disposition!=='FALSE POSITIVE'){ 
            return(
              <div style={{margin:'5px',border:'2px solid black',width:'27%'}} key={exo.kepid}>
                <h3 style={{margin:'2px'}}>Exoplaneta {exo.kepoi_name} {exo.koi_disposition}</h3>
                <h5 style={{margin:'2px'}}>Temperatura: {exo.koi_teq - 273}°C</h5>
                <h5 style={{margin:'2px'}}>Periodo orbital: {exo.koi_period} dias</h5>
              </div>
            )}else{
              falseP[i]=exo;
              i++;
              return(null)
            }
          })
          }
          
          {//Imprimo los falsos positivos en consola en un solo objeto para mejor manejo de la informacion
          console.log(falseP)}
          
        </div>
    </div>
  )
}

export default ExoPConfirmed