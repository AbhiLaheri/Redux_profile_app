// This will can combine one or more Reducer functions and export it through Redux"s combineReducer helper.
import { combineReducers } from "redux";
import profile_details from "./profile/profile_reducer";

export default combineReducers({
    profile_details
});
