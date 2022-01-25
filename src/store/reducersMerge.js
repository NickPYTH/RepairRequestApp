import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import {loginScreenReducer} from "./reducers/loginScreeenReducer";
//import { rootWatcher } from "../saga/sagasMerge";

//const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    loginScreenReducer
});

export const store = createStore(rootReducer);
//export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
//sagaMiddleware.run(rootWatcher);