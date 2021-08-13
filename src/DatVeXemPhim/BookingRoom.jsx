import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actConfirm } from '../store/action/bookingRoomAction';
import './BaiTapBookingTicket.css'
import CheckedBlock from './CheckedBlock';
import SeatBlock from './SeatBlock';
class BookingRoom extends Component {
    render() {
        const { confirmSeat } = this.props
        return (
            <div className="container-fluid bookingMovie">
                <div className="row">
                    <div className="col-7">
                        <h2 className="text-warning">Đặt vé xem phim</h2>
                        <span className="text-light">Màn hình</span>
                        <div className="w-100  screen"></div>
                        <SeatBlock />
                    </div>
                    <div className="col-5 my-3">
                        <h2 className="text-light">Danh sách ghế bạn chọn</h2>
                        <ul className="seat-status text-left">
                            <li className="smallBox yellowBox">Ghế được đặt</li>
                            <li className="smallBox greenBox">Ghế đang chọn</li>
                            <li className="smallBox whiteBox">Ghế chưa chọn</li>
                        </ul>
                        <CheckedBlock />
                        <button className="btn btn-primary my-3" onClick={confirmSeat }>Confirm</button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    confirmSeat: () => {
        dispatch(actConfirm())
    }
})

export default connect(null, mapDispatchToProps)(BookingRoom)