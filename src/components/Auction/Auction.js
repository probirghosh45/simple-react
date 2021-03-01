import React, { useEffect, useState } from "react";
import cricketersData from '../../fakeData/cricketersData.json';
import Cricketer from "../Cricketer/Cricketer";
import Team from "../Team/Team";
import './Auction.css'


    const Auction = (props) => {
        const [cricketersInfo, setCricketersInfo] = useState([]);
        useEffect(()=> {
            setCricketersInfo(cricketersData);
        }, []) 

        const [team,setPlayer]=useState([]) 
        
        const handleAddCricketer =(cricketer) =>{
            // console.log("cricketer added",cricketer); 
            const newTeam=[...team,cricketer];
            setPlayer(newTeam);
         } 



    return (
        <div  className="auction-container">
            <div className="cricketer-container">
            {
            cricketersInfo.map(info => 
            <Cricketer 
                handleAddCricketer={handleAddCricketer}
                info={info} key={info.id}>
              </Cricketer>)       

           }
            </div>
            <div className="team-container">
                <Team team={team}></Team>
            </div>
        </div>
    );
};

export default Auction;