import {
  // SET_STORE_TOKEN,
  SET_TITLE,
} from "../../constants/profile_actiontypes";

const initial_state = {
  name: "Abhi",
  range: [],
 
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_TITLE:
      return (state = { ...state, item_name: action.payload });
   

  }
  return state;
}
