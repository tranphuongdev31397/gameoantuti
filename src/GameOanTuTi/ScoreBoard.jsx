
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScoreBoard extends Component {
    render() {
        const {sumPlay, sumWin} = this.props
        return (
            <div className="my-5">
                <h1 className="text-warning">I'm Iron Man i love you 3000!!</h1>
                <br />
                <h1 className="text-success">SỐ BÀN THẮNG: <span className="text-warning">{sumWin}</span></h1>
                <br />
                <h1 className="text-success">SỐ BÀN ĐÃ CHƠI: <span className="text-warning">{sumPlay}</span></h1>
            </div>
        );
    }
}
const mapStateToDrops = state => ({
    sumWin: state.oanTuTiReducer.sumWin,
    sumPlay: state.oanTuTiReducer.sumPlay,
})
export default connect(mapStateToDrops)(ScoreBoard);