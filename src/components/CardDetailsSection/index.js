import React from "react";
import "./style.scss";

const CardDetailsSection = ({user, cardNumber, expiryDate, securityCode, isCardDetailsEditable}) =>{

    console.log("user");
    return(
        <div className="card_details_container">
            <div className="details_container">
                <label className="input_label">Card Number</label>
                <input type="number" className="input_box large_input_box" value={cardNumber} disabled={isCardDetailsEditable}/>
            </div>
            <div className="details_container">
                <label className="input_label">Card Holders Name</label>
                <input type="text" className="input_box large_input_box" value={user} disabled={isCardDetailsEditable}/>
            </div>
            <div className="card_details">
                <div className="details_container">
                    <label className="input_label">Card Expiry</label>
                    <input type="text"className="input_box small_input_box" value={expiryDate} disabled={isCardDetailsEditable}/>
                </div>
                <div className="details_container">
                    <label className="input_label">Security Code</label>
                    <input type="password" className="input_box small_input_box" value={securityCode} disabled={isCardDetailsEditable}/>
                </div>
            </div>
        </div>
    )
}

export default CardDetailsSection;