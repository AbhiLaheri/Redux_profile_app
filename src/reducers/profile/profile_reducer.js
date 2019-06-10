import {
  // SET_STORE_TOKEN,
  SET_ALL_DATA,
  SET_ADD_ONE
} from "../../constants/profile_actiontypes";

const initial_state = {
  name: "Abhi",
  allUserdata: [],
  end:4
 
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_ALL_DATA:
      return (state = { ...state, allUserdata: action.payload });
      case SET_ADD_ONE:
        return (state = { ...state, end: action.payload+1 });
   

  }
  return state;
}
