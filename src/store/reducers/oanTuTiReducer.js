import { PLAY_GAME, YOUR_CHOICE } from "../constant/oanTuTiConstant";

const inittialState = {
    yourChoice: 'keo',
    botChoice: 'keo',
    sumWin: 0,
    sumPlay: 0,
}
const oanTuTiReducer = (state = inittialState, { type, payload }) => {
    switch (type) {
        case YOUR_CHOICE: {
            //set lại state cho yourChoice, payload = act (keo,bua,bao)
            state.yourChoice = payload
            return { ...state, yourChoice: state.yourChoice }
        }
        case PLAY_GAME: {
            //Tổng màn chơi +1 khi bấm vào nút onClick
            ++state.sumPlay
            //Botchoice
            //Tìm 1 số random => numberRandom là 0 hoặc 1 hoặc 2
            let numberRandom = Math.floor(Math.random() * 3)
            //Đặt điều kiện để xuất keo,bua,bao theo numberRandom cho botChoice
            if (numberRandom === 0) {
                state.botChoice = 'keo'
            } else if (numberRandom === 1) {
                state.botChoice = 'bua'
            } else {
                state.botChoice = 'bao'
            }
            //Tính sumWin
            if(state.yourChoice === 'keo' && state.botChoice === 'bao'){
                ++state.sumWin
            }else if(state.yourChoice === 'bua' && state.botChoice === 'keo'){
                ++state.sumWin
            }else if(state.yourChoice === 'bao' && state.botChoice === 'bua'){
                ++state.sumWin
            }
            return { ...state, sumPlay: state.sumPlay, botChoice: state.botChoice, sumWin: state.sumWin }
        }
        default:
            return state;
    }

}
export default oanTuTiReducer