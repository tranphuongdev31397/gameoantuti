import { CONFIRM_SEAT, DELETE_SEAT, GET_SEAT } from "../constant/bookingRoomConstant";

export const actGetSeat = (seat) => ({
    type: GET_SEAT,
    payload: seat
})
export const actDeleteSeat = seat => ({
    type: DELETE_SEAT,
    payload: seat
})
export const actConfirm = ()  => ({
    type: CONFIRM_SEAT,

})