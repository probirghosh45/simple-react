import React from 'react';
import './Team.css'

const Team = (props) => {
    const team = props.team;
            
    let total =0;
    for (let i = 0; i < team.length; i++) {
        const cricketer = team[i];
        total=total+cricketer.salary;
    }

    return (
        <div className="teamStyle">
            <h3>Best 11 Selection</h3>
            <h5>Numbers of Player: {team.length} </h5>
            <ul className="selectedPlayer">
                {props.team.map(player=><ol>Name: {player.name}, Salary: ${player.salary} </ol>)}
            </ul>
            <h5>Total Salary : ${total}</h5>
        </div>
    );
};

export default Team;