import {RESUME_ACTION_TYPES} from './resume-data-types'


export const RESUME_INITIAL_STATE = {

	profile : {
		name : '',
		phone: '',
		email:'',
		
	},
	doctype: ''
	


}


export const resumeReducer = (state=RESUME_INITIAL_STATE, action={}) =>{




	const {type,payload} = action;
	console.log(state,'profile state')
	console.log(payload,'payload')



	console.log(payload,'cat payload')

	console.log(type,'cat type')

	switch(type){
	case RESUME_ACTION_TYPES.SET_RESUME:
		return{
			...state,profile:payload
		}

	default:
		return state;



	}




}