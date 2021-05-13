import React, {useState, useEffect } from 'react';
import axios from 'axios';

const Planets = props =>{
    // "https://swapi.dev/api/people/1/"
    const {Id} = props;
    const [res, setRes] = useState({});
    useEffect(() =>{
        axios.get(`https://swapi.dev/api/planets/${Id}/`)
        .then(response=>setRes(response.data));
    },[Id])
    return(
    <>
    <h1>{res.name}</h1>
    <h2>Climate: {res.climate}</h2>
    <h2>Terrain: {res.terrain}</h2>
    <h2>Surface Water: {res.surface_water}</h2>
    <h2>Population: {res.population}</h2>
    </>
    )
}
export default Planets;