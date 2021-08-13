import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actDeleteSeat } from '../store/action/bookingRoomAction';


class CheckedBlock extends Component {

    render() {
        const { arrChoose, deleteSeat } = this.props
        return (
            <table className="table text-light">
                <thead>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                <tbody>

                    {arrChoose.map((seat, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{seat.soGhe}</td>
                                <td>{seat.gia}</td>
                                <td><button className="btn btn-danger" onClick={()=>deleteSeat(seat)}>Xóa</button></td>
                            </tr>
                        )
                    })
                    }

                </tbody>
            </table>
        );
    }
}
const mapStateToProps = state => ({
    arrChoose: state.bookingRoomReducer.arrChoose
})
const mapDispatchToProps = dispatch => ({
    deleteSeat: (seat) => {
        dispatch(actDeleteSeat(seat))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckedBlock);