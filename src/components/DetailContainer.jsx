import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailContent from './Main/Exoplanets/DetailContent'
import { Link } from 'react-router-dom'

const DetailContainer = () => {

    const [exoPlanet, setExo] = useState({})
    const {kepoi_name} = useParams()
    useEffect(()=>{
        fetch(
            `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&select=kepid,kepoi_name,koi_disposition,koi_score,koi_teq,koi_period,koi_prad&where=kepoi_name like '${kepoi_name}'&format=json`
            )
        .then(res => res.json())
        .then(res => setExo(res[0]))
        .catch((err) => console.log(err));
    },[kepoi_name])

    return (
    <>
        <DetailContent exo={exoPlanet}/>
        <Link to='/'>Inicio</Link>
    </>
  )
}

export default DetailContainer