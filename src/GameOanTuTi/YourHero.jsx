import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actChoice } from '../store/action/oanTuTiAction';

class YourHero extends Component {
    render() {
        const { yourChoice,choose } = this.props
        return (
            <div className="card">
                <div className="speech-bubble">
                    <div className="block-choice">
                        <img src={`./images/${yourChoice}.png`} width="50px" />
                    </div>
                </div>
                <img className="card-img-top" src="./images/player.png" alt="Card image cap" />
                <div className="card-body">
                    <button onClick={()=> choose('keo')}><img src="./images/keo.png" width="50px" /></button>
                    <button onClick={()=> choose('bua')}><img src="./images/bua.png" width="50px" /></button>
                    <button onClick={()=> choose('bao')}><img src="./images/bao.png" width="50px" /></button>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => ({
    yourChoice: state.oanTuTiReducer.yourChoice
})
const mapDispatchToProps = dispatch =>({
    choose: act => {
        dispatch(actChoice(act))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(YourHero);