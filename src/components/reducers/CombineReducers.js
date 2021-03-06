import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import HikeFormReducer from './HikeFormReducer';
import HikeReducer from './HikeReducer';

//we import our reducer and give it a name
export default combineReducers({
  auth: AuthReducer,
  hikeForm: HikeFormReducer,
  hikeList:HikeReducer
});
