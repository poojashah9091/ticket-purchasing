import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import CardDetailsSection from "../CardDetailsSection";
import { clearUserStatus, editCardDetails } from "../../data/userSlice";
import Snackbar from '@mui/material/Snackbar';
import { addFinalBookingDetails, clearBillStatus } from "../../data/billSlice";
import "./style.scss";

const CheckoutPage = () =>{

    const showDetails = useSelector(store=>store.bill.reservedShowDetails);
    const {user, cardNumber, expiryDate, securityCode, id} = useSelector(store=>store.user.cardDetails[0]);
    const {serviceFees, deliveryFees, orderProcessingFees} = useSelector(store=>store.bill.otherCharges);
    const cardDetailsUpdateStatus = useSelector(store=>store.user.status);
    const orderPlacementStatus = useSelector(store=>store.bill.status);
    const [quantity, setQuantity] = useState(showDetails.quantity);
    const allowedBuyQuantity = [1,2,3,4,5,7,8,9,10];
    const [finalTotal, setFinalTotal] = useState(0);
    const [isTermsAgreed, setTermsAgreed] = useState(false);
    const [isCardDetailsEditable, setIsCardDetailsEditable] = useState(false);
    const [message, setMessage ]= useState("");
    const dispatch = useDispatch();

    const [cardDetails, setCardDetails] = useState({
        cardNumber: cardNumber,
        user: user,
        expiryDate: expiryDate,
        securityCode: securityCode,
        id: id
    });

    useEffect(()=>{
       if(orderPlacementStatus==="success"){
            setMessage("Order has been placed successfully");
       }
    },[orderPlacementStatus]);

    useEffect(()=>{
        if(cardDetailsUpdateStatus==="success"){
            setMessage("Card details have been successfully updated");
        }
     },[cardDetailsUpdateStatus])

    useEffect(()=>{
        setFinalTotal((showDetails.perTicketPrice * quantity) + (serviceFees * quantity) + (deliveryFees)); 
    },[quantity])

    const handleChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleChangeOfTermsConsent = () =>{
        setTermsAgreed(!isTermsAgreed);
    }

    const handlePlaceOrderBtn = () =>{
        dispatch(addFinalBookingDetails({
            showName: showDetails.name,
            quantity: quantity,
            date: showDetails.date,
            totalValue: finalTotal
        }));
    }

    const handleEditCardDetails = () =>{
        setIsCardDetailsEditable(!isCardDetailsEditable);
        if(isCardDetailsEditable){
            dispatch(editCardDetails(cardDetails));
        }
    }

    const updateCardDetailsStateValue = (e) =>{
        setCardDetails({
            ...cardDetails,
            [e.target.name]: e.target.value
        });
    }

    const handleSnackbarClose = () =>{
        setMessage("");
        dispatch(clearUserStatus());
        dispatch(clearBillStatus());
    }

    return (
        <>
            <div className="checkout_container">
                {/* Booking Details Section */}
                <div className="booked_show_details_container">
                    <label className="header">
                        Booking Details
                    </label>
                    <div className="booked_show_details">
                        <div className="checkout_show_details">
                            <label className="show_title">{showDetails.name}</label>
                            <label className="show_price">Price per ticket: ${showDetails.perTicketPrice || "-"}</label>
                            <label className="show_date">Will be held on: {showDetails.date || "-"}</label>
                        </div>
                        <div className="qty_cta_container">
                            <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={quantity}
                                label="Quantity"
                                onChange={handleChange}
                            >
                                {allowedBuyQuantity.map(item=>{
                                    return <MenuItem key={item} value={item}>{item}</MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="checkout_summary">
                    <div className="miscelleneous_details">
                        {/* Delivery Details Section */}
                        <div className="deliver_details_container">
                            <label className="header">
                                Delivery
                            </label>
                            <label className="sub_header">Delivery Mode</label>
                            <div className="sub_summary">
                                <label className="internal_details">
                                    Via Email
                                </label>
                                <label className="internal_details">{deliveryFees || "Free"}</label>
                            </div>
                            <label className="delivery_info internal_details">Once booking is sucessfully completed, these tickets will be delievered to you on your registered email address within 4hrs</label>
                        </div>
                        {/* Card Details Section */}
                        <div className="payment_details_container">
                            <label className="header">
                                Payment
                            </label>
                            <label className="sub_header">Use Credit / Debit Card</label>
                            <CardDetailsSection 
                                    cardDetails={cardDetails}
                                    updateCardDetailsStateValue={updateCardDetailsStateValue}
                                    isCardDetailsEditable={isCardDetailsEditable}
                            />
                            <button className="edit_class_details" onClick={handleEditCardDetails}>
                                { isCardDetailsEditable ? "Save" : "Edit" }
                            </button>
                        </div>
                    </div>
                    {/* Total Details Section */}
                    <div className="total_bill_container">
                        <div className="final_total">
                            <label className="header">Total</label>
                            <label className="header">${finalTotal}</label>
                        </div>
                        <label className="sub_header">Tickets</label>
                        <div className="sub_summary">
                            <label className="internal_details">
                                Show's Tickets: ${showDetails.perTicketPrice} X {quantity}
                            </label>
                            <label className="internal_details">{showDetails.perTicketPrice*quantity}$</label>
                        </div>
                        <label className="sub_header">Note From Seller</label>
                        <label className="internal_details">
                            As per goverment norms its mandatory to be fully vaccinated inorder to attend this show and please also carry proof of your vaccination along to the venue for verification. In case of not being able to fulfil this criteria admission will be denied.
                        </label>
                        <label className="sub_header">Fees</label>
                        <div className="sub_summary">
                            <label className="internal_details">
                                Service Fees: ${serviceFees} X {quantity}
                            </label>
                            <label className="internal_details">{serviceFees*2}$</label>
                            </div>
                            <div className="sub_summary">
                            <label className="internal_details">
                                Order Processing Fees: ${orderProcessingFees}
                            </label>
                            <label className="internal_details">{serviceFees*2}$</label>
                        </div>
                        <label className="sub_header"> Delivery</label>
                        <div className="sub_summary">
                            <label className="internal_details">Delivery Fees</label>
                            <label className="internal_details">{deliveryFees ? `$${deliveryFees}` : "Free"}</label>
                        </div>
                        <label className="sub_header"> *All Sales Final - No Refunds</label>
                        <div className="terms_container">
                            <Checkbox
                                checked={isTermsAgreed}
                                onChange={handleChangeOfTermsConsent}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <label className="terms_label"> I have read and agree to the <a href="">Terms Of Use</a></label>
                        </div>
                        <button onClick={handlePlaceOrderBtn} className="place_order_btn" disabled={!isTermsAgreed}>Place Order</button>
                        <label className="disclaimer">*Exemptions may apply, see our terms of Use</label>
                    </div>
                </div>
            </div>
            <Snackbar
                open={message.length>0}
                autoHideDuration={1700}
                onClose={handleSnackbarClose}
                message={message}
            />
        </>
    )
}

export default CheckoutPage;