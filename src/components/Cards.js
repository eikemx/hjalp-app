import React from "react";

const Card = (props) => {

    console.log(props.hospitals);

    return (
    <>
        <div className="container">
            <div className="row">
                <div className="card">
                    <div className="card-header">Name</div>
                        <div className="card-body">
                            <p className="card-text">Adress:</p>
                            <a href="#" className="card-link">Card link</a>
                        </div>
                        <div className="card-footer text-muted">date</div>
                </div>
            </div>
        </div>
    </> 
    )

}

export default Card;