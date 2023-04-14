import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBookingDetails } from "../../data/billSlice";
import "./style.scss";

const ShowCard = ({title, posterURL, price, showDate}) =>{
    
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleBuyNowAction = () =>{
        dispatch(addBookingDetails({
                name: title,
                date: showDate,
                perTicketPrice: price
        }));
        navigate("/checkout");
    }

    return(
        <div className="show_main_container">
            <div className="show_basic_info_container">
                <img src={posterURL} alt={title}/>
                <div className="show_basic_info">
                    <label className="show_title">{title}</label>
                    <label className="show_price">Price per ticket: {price}</label>
                    <label className="show_date">Will be held on: {showDate}</label>
                </div>
            </div>
            <div className="show_buy_cta" onClick={handleBuyNowAction}>
                Buy Now
            </div>
        </div>
    )
}

export default ShowCard;