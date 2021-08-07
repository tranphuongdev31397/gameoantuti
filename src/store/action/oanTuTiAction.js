import { PLAY_GAME, YOUR_CHOICE } from "../constant/oanTuTiConstant"

export const actChoice = act => ({
    type: YOUR_CHOICE,
    payload: act,
})
export const actPlay = () => ({
    type: PLAY_GAME,
})