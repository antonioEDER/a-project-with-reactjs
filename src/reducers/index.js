import { combineReducers } from "redux";
import { reducers as frutasReducers } from "./frutas.reducer";

const reducers = combineReducers({
    frutasReducers
})

export { reducers }