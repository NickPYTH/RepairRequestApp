import {UPDATE_LOGIN_INPUT, UPDATE_PASSWORD_INPUT} from "../types/loginScreenTypes";

export const updateLoginInput = (login) => ({
    type: UPDATE_LOGIN_INPUT,
    login
})

export const updatePasswordInput = (password) => ({
    type: UPDATE_PASSWORD_INPUT,
    password
})
