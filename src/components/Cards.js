import React from "react";

const Card = (props) => {

    // console.log(props.hospitals);

    return (
    <>
                <div className="card">
                    <div className="card-header">{props.hospitals.name}</div>
                        <div className="card-body">
                            <p className="card-text">{props.hospitals.description}</p>
                            <p className="card-text">{props.hospitals.address} {props.hospitals.city}</p>
                        </div>
                 </div>
    </> 
    )

}

export default Card;