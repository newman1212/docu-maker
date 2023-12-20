// import {createAction} from '../create-action';
import {RESUME_ACTION_TYPES} from './resume-data-types';


const createAction = (type,payload) => ({type,payload})


export const setProfile = (profileData) => createAction(RESUME_ACTION_TYPES.SET_RESUME,profileData);