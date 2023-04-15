import React from "react";
import "./style.scss";

const CardDetailsSection = ({cardDetails, isCardDetailsEditable, updateCardDetailsStateValue}) =>{

    const handleChange = (e) =>{
        updateCardDetailsStateValue(e);
    }

    return(
        <div className="card_details_container">
            <div className="details_container">
                <label className="input_label">Card Number:</label>
                <input type="number" className="input_box large_input_box" name="cardNumber" id={cardDetails.id} value={cardDetails.cardNumber} onChange={handleChange} disabled={!isCardDetailsEditable}/>
            </div>
            <div className="details_container">
                <label className="input_label">Card Holders Name:</label>
                <input type="text" className="input_box large_input_box" name="user" id={cardDetails.id} value={cardDetails.user} onChange={handleChange} disabled={!isCardDetailsEditable}/>
            </div>
            <div className="card_details">
                <div className="details_container">
                    <label className="input_label">Card Expiry:</label>
                    <input type="text"className="input_box small_input_box" name="expiryDate" id={cardDetails.id} value={cardDetails.expiryDate} onChange={handleChange} disabled={!isCardDetailsEditable}/>
                </div>
                <div className="details_container">
                    <label className="input_label">Security Code:</label>
                    <input type="password" className="input_box small_input_box" name="securityCode" id={cardDetails.id} value={cardDetails.securityCode} onChange={handleChange} disabled={!isCardDetailsEditable}/>
                </div>
            </div>
        </div>
    )
}

export default CardDetailsSection;