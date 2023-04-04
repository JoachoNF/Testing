import React, { useEffect, useState } from 'react';
import Styles from '../../Style.module.css'
import CardContainer from '../../CardContainer'

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
        <h2>Filtros:</h2>
          {
            URL.slice(URL.indexOf('where')+6,URL.indexOf('&order')).split('and').map((element)=>{
              return(
              <h4 style={{margin:'5px'}} key={element.toString()}>
                {element.slice(element.indexOf('_')+1,element.length)}
              </h4>)
            })
          }

        <div className={Styles.CardContainer}>
          {
           
            items.map((exo)=>{
            if(exo.koi_disposition!=='FALSE POSITIVE'){ 
            return(
              <CardContainer exo={exo} key={exo.kepid}/>
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