import {HIKE_UPDATE, HIKE_CREATE} from '../actions/types';


//this is to let other ppl known what this reducer is responsible for
const INITIAL_STATE = {
name:'',
description:''
};

//in order to deal with the different actions, our reducer takes in 2 arguments, a state and an action
export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    //key interpolation
    case HIKE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    //clear employe form of any previously input values by setting to initial state
    case HIKE_CREATE:
      return INITIAL_STATE;

    default:
      return state;
  }
};
