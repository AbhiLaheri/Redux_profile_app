import { SET_INCREMENT_COUNT, SET_DECREMENT_COUNT } from "../constants/profile_actiontypes";

//   FUNCTION FOR SET DATA
export function incrementCount(payload) {
    return {
      type: SET_INCREMENT_COUNT,
      payload: payload
    };
  }

//   FUNCTION FOR SET DATA
  export function derementCount(payload) {
    return {
      type: SET_DECREMENT_COUNT,
      payload: payload
    };
  }
  