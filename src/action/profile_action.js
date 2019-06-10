import {
    SET_ALL_DATA,
    SET_ADD_ONE
  } from "../constants/profile_actiontypes";

export function getAllData(){
    return dispatch => {

      return fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(responseJson => {
         
            dispatch(setAllData(responseJson));
          
        })
        .catch(error => {
          console.error(error);
        });
    };
  }
  //   FUNCTION FOR SET DATA
export function setAllData(payload) {
    return {
      type: SET_ALL_DATA,
      payload: payload
    };
  }

  //   FUNCTION FOR SET DATA
  export function increment(payload) {
    return {
      type: SET_ADD_ONE,
      payload: payload
    };
  }
  