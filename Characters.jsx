import React, {useState, useEffect } from 'react';
import axios from 'axios';

const Characters = props =>{
    // "https://swapi.dev/api/people/1/"
    const {Id} = props;
    const [res, setRes] = useState({});
    useEffect(() =>{
        axios.get(`https://swapi.dev/api/people/${Id}/`)
        .then(response=>setRes(response.data)).catch(err=>setRes(null));
    },[Id])
    return(
    <>    
    {res ?
    <>
    <h1>{res.name}</h1>
    <h2>Height: {res.height}</h2>
    <h2>Mass: {res.mass}</h2>
    <h2>Hair Color: {res.hair_color}</h2>
    <h2>Skin Color:  {res.skin_color}</h2>
    </> :
    <>
    <p>These aren't the droids you're looking for.</p>
    <img src="https://www.liveabout.com/thmb/ReQNQdB6nD0eyGqg4TGS8qaHjlA=/1387x1040/smart/filters:no_upscale()/EP2-IA-60435_R_8x10-56a83bea3df78cf7729d314a.jpg" alt="ObiWon"></img>
    </>
    }
    </>
    )
}
export default Characters;