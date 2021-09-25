import React from 'react';
import "./Persons.css"

const Persons = (props) => {
    const{name,img,country,net_worth,salary}=props.publisher;
    return (
        <div className="publisher-card">
            <img src={img} alt="" />
            <h2> {name}  </h2>
            <p>Net Worth:  {net_worth}</p>
            <p>Country: {country}</p>
            <p>Salary:{salary}</p>
        </div>
    );
};

export default Persons;