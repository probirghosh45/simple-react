import React , { useState } from  'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Cricketer.css'

const Cricketer = (props) => {
    const {name,img, salary,team} = props.info;
    const [btnDisable, setBtnDisable] = useState(false);
    return (

        <div className="cricketerStyle">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="cricketerInfo">
                <h1>Name: {name}</h1>
                <h3>Salary: {salary}</h3>
                <h3>IPL Team: {team}</h3> 
                
                <button 
                className={btnDisable ? "add-btn disabled" : "add-btn"}
                  onClick={()=>{
                    props.handleAddCricketer(props.info)
                    setBtnDisable(true); 
                }}
               >
                    <FontAwesomeIcon icon={faUser}/><small>Add Cricketer</small></button>
           </div>
        </div>
    );
};

export default Cricketer;