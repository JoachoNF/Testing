import React from 'react';
import Styles from './Style.module.css'

const CardContainer = ({exo}) => {
     
  return (
              <div
              className={Styles.CardContent} 
              style={{margin:'5px',border:'2px solid black',width:'27%'}} 
              key={exo.kepid}>
                <h3 style={{margin:'2px'}}>Exoplaneta {exo.kepoi_name} {exo.koi_disposition}</h3>
                <h5 style={{margin:'2px'}}>Temperatura: {exo.koi_teq - 273}°C</h5>
                <h5 style={{margin:'2px'}}>Periodo orbital: {exo.koi_period} dias</h5>
              </div>
  )
}

export default CardContainer