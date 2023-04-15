import { createSlice } from "@reduxjs/toolkit";
const billSlice = createSlice({
    name: "generatedBill",
    initialState: {
        cardDetails:{
            user: "Pooja Shah",
            cardNumber: 1234567812345678,
            expiryDate: "04/28",
            securityCode: 1234
        },
        bookedShowDetails:{
            name: "",
            date: "",
            perTicketPrice: 0,
            quantity: 0
        }
    },
    reducers: {
        addBookingDetails: (state, action)=>{
            state.bookedShowDetails = {
                name: action.payload.name,
                date: action.payload.date,
                perTicketPrice: action.payload.perTicketPrice,
                quantity: action.payload.quantity
            }
        },
        addCardDetails: (state, action)=>{
            state.cardDetails.push(
                {
                    user: action.payload.name,
                    cardNumber: action.payload.cardNumber,
                    expiryDate: action.payload.expiryDate,
                    securityCode: action.payload.securityCode
                }
            )
        },
        editCardDetails: (state, action)=>{
            let cardIndex = state.cardDetails.findIndex(card=>card.cardNumber === action.payload.cardNumber);
            state.cardDetails[cardIndex] = {
                user: action.payload.name,
                cardNumber: action.payload.cardNumber,
                expiryDate: action.payload.expiryDate,
                securityCode: action.payload.securityCode
            }
        }
    },
});

export default billSlice.reducer;
export const {addCardDetails, editCardDetails, addBookingDetails} = billSlice.actions;