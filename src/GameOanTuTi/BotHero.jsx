import React, { Component } from 'react';
import { connect } from 'react-redux';

class BotHero extends Component {
    render() {
        const {botChoice} = this.props
        return (
            <div>
                   <div className="card">
                <div className="speech-bubble">
                    <div className="block-choice">
                        <img src={`./images/${botChoice}.png`} className="reverse-image" width="50px" />
                    </div>
                </div>
                <img className="card-img-top" src="./images/playerComputer.png" alt="Card image cap" />
            </div>
            </div>
        );
    }
}
const mapStateToDrops = state => ({
    botChoice: state.oanTuTiReducer.botChoice
})
export default connect(mapStateToDrops)(BotHero);