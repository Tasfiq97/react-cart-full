import React, { useEffect, useState } from 'react';
import Persons from '../Persons/Persons';
import "./Publication.css"


const Publication = () => {
const [publishers,setPublishers]=useState([]);

useEffect(()=>{
    fetch("./data.json")
    .then(res=>res.json())
    .then(data=>setPublishers(data))
},[])

    return (
        <div className="publication-sec">
            <div className="publication-right">
             {
                 publishers.map(publisher=><Persons
                 key={publisher.name}
                 publisher={publisher}
                 ></Persons>)
             }
            </div>
            <div className="cart-sec">
                <h1>this is cart section</h1>
            </div>
        </div>
    );
};

export default Publication;