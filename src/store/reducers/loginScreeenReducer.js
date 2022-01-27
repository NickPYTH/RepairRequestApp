import {UPDATE_LOGIN_INPUT, UPDATE_PASSWORD_INPUT} from "../types/loginScreenTypes";

const INITIAL_STATE = {
    login: "",
    password: "",
    isAuth: true,
    role: "user",
}

export const loginScreenReducer = (state = INITIAL_STATE, action) => {
    switch (action){
        case UPDATE_LOGIN_INPUT:
            return {
                ...state,
                login: action.login
            }
        case UPDATE_PASSWORD_INPUT:
            return {
                ...state,
                password: action.password
            }
        default:
            return state
    }
}