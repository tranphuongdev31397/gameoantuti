import dataSeat from '../../DatVeXemPhim/danhSachGhe.json'
import { CONFIRM_SEAT, DELETE_SEAT, GET_SEAT } from '../constant/bookingRoomConstant';

const inittialState = {
    dataSeat: dataSeat,
    arrChoose: [

    ],
};
const bookingRoomReducer = (state = inittialState, { type, payload }) => {
    switch (type) {
        case GET_SEAT: {
            const arrChooseUpdate = [...state.arrChoose]
            let idx = arrChooseUpdate.findIndex((idx) => {
                return idx.soGhe === payload.soGhe
            })
            if (idx === -1) {
                arrChooseUpdate.push(payload)
            } else if (idx !== -1) {
                arrChooseUpdate.splice(idx, 1)
            }
            return { ...state, arrChoose: arrChooseUpdate }
        }
        case DELETE_SEAT: {
            const arrChooseUpdate = [...state.arrChoose]
            let idx = arrChooseUpdate.findIndex(seat => {
                return seat.soGhe === payload.soGhe
            })
            arrChooseUpdate.splice(idx, 1)
            document.getElementById(`${payload.soGhe}`).checked = false
            return { ...state, arrChoose: arrChooseUpdate }
        }
        case CONFIRM_SEAT: {
            let arrChooseUpdate = [...state.arrChoose]
            let dataSeatUpdate = [...state.dataSeat]
            for (let i = 1; i < dataSeatUpdate.length; i++) {
                dataSeatUpdate[i].danhSachGhe.forEach((seat,idx) => {
                   if (seat.soGhe === arrChooseUpdate[0].soGhe) {
                        return seat.daDat = true
                     }
                })
            }
            
         console.log(dataSeatUpdate)


            return { ...state, dataSeat: dataSeatUpdate}
        }
        default:
            return state;
    }

}
export default bookingRoomReducer

