import {
    // SET_STORE_TOKEN,
    SET_INCREMENT_COUNT,
    SET_DECREMENT_COUNT
  } from "../../constants/profile_actiontypes";
  
  const initial_state = {
    count:0
   
  };
  
  export default function reducer(state = initial_state, action) {
    switch (action.type) {
      case SET_INCREMENT_COUNT:
        return (state = { ...state, count: action.payload+1 });
        case SET_DECREMENT_COUNT:
          return (state = { ...state, count: action.payload-1 });
     
  
    }
    return state;
  }
  