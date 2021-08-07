import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actPlay } from '../store/action/oanTuTiAction';
import BotHero from './BotHero';
import './oanTuTi.css'
import ScoreBoard from './ScoreBoard';
import YourHero from './YourHero';
class OanTuTi extends Component {
    render() {
        const { playGame } = this.props
        return (
            <div className="oantuti-container font-face-gm">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <YourHero />
                        </div>
                        <div className="col-4">
                            <ScoreBoard />
                            <button className="btn btn-success" onClick={playGame}>Play game</button>
                        </div>
                        <div className="col-4">
                            <BotHero />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    playGame: () => {
        dispatch(actPlay())
    }
})
export default connect(null, mapDispatchToProps)(OanTuTi)