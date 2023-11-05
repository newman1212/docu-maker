import {combineReducers} from 'redux';
// import {userReducer} from './User/user-reducer';
import {resumeReducer} from './Form-data/Resume-data/resume-data-reducer';



export const rootReducer = combineReducers({

	profile: resumeReducer,







})