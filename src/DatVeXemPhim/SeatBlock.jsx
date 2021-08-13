
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetSeat } from '../store/action/bookingRoomAction';
class SeatBlock extends Component {
    render() {
        const { dataSeat, getSeat } = this.props
        return (
            <table className="container text-light">
                <tbody>
                {
                    dataSeat.map((obj, idx) => {
                        const { hang, danhSachGhe } = obj
                        return (
                            <tr key={idx}>
                                <td className={hang === '' ? 'rowNumber' : 'firstChar'}>{hang}</td>
                                {danhSachGhe.map((seat,idx) => {
                                    const { soGhe, gia, daDat } = seat
                                    return (
                                        <td className={hang === '' ? 'firstChar' : 'ghe'} value={gia} key={idx}>
                                            {hang === '' ? (soGhe) :
                                                (<input type="checkbox" className="seats" disabled={daDat} onClick={() => getSeat(seat)} id={soGhe}>

                                                </input>)
                                            }
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}
const mapStateToDrops = state => ({
    dataSeat: state.bookingRoomReducer.dataSeat
})
const mapDispatchToProps = dispatch => ({
    getSeat: (seat) => {
        dispatch(actGetSeat(seat))
    }
})
export default connect(mapStateToDrops, mapDispatchToProps)(SeatBlock);