import { createSlice } from "@reduxjs/toolkit";
let id = 0;
const userSlice = createSlice({
    name: "loggedInUser",
    initialState: {
        cardDetails:[{
            id: ++id,
            user: "Pooja Shah",
            cardNumber: 1234567812345678,
            expiryDate: "04/28",
            securityCode: 1234
        }],
        status: "",
        error: ""
    },
    reducers: {
        addCardDetails: (state, action)=>{
            state.cardDetails.push(
                {
                    user: action.payload.user,
                    cardNumber: action.payload.cardNumber,
                    expiryDate: action.payload.expiryDate,
                    securityCode: action.payload.securityCode,
                    id: ++id
                }
            )
            state.status = "success";
        },
        editCardDetails: (state, action)=>{
            let cardIndex = state.cardDetails.findIndex(card=>card.id === action.payload.id);
            state.cardDetails[cardIndex] = {
                user: action.payload.user,
                cardNumber: action.payload.cardNumber,
                expiryDate: action.payload.expiryDate,
                securityCode: action.payload.securityCode,
                id: action.payload.id,
            }
            state.status = "success";
        },
        clearUserStatus: (state)=>{
            state.status = "";
        }
    },
});

export default userSlice.reducer;
export const {addCardDetails, editCardDetails, clearUserStatus} = userSlice.actions;