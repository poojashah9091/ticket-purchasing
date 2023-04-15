import { createSlice } from "@reduxjs/toolkit";
const billSlice = createSlice({
    name: "generatedBill",
    initialState: {
        reservedShowDetails:{
            name: "",
            date: "",
            perTicketPrice: 0,
            quantity: 0
        },
        otherCharges:{
            serviceFees: 1.08,
            deliveryFees: 0.00,
            orderProcessingFees: 2.00
        },
        finalBookingDetails:{
            showName: "",
            quantity: 0,
            date: "",
            totalValue: ""
        },
        status: "",
        error: ""
    },
    reducers: {
        addReservationDetails: (state, action)=>{
            state.reservedShowDetails = {
                name: action.payload.name,
                date: action.payload.date,
                perTicketPrice: action.payload.perTicketPrice,
                quantity: action.payload.quantity
            }
            
        },
        clearBillStatus: (state)=>{
            state.status = "";
        },
        addFinalBookingDetails: (state, action)=>{
            state.finalBookingDetails = {
                showName: action.payload.name,
                quantity: action.payload.quantity,
                date: action.payload.date,
                totalValue: action.payload.totalValue
            }
            state.status = "success";
        }
    }
});

export default billSlice.reducer;
export const {addReservationDetails, clearBillStatus, addFinalBookingDetails} = billSlice.actions;