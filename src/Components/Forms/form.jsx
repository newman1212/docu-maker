import './form.scss';
import {setProfile} from '../../Store/Form-data/Resume-data/resume-data-action';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {selectProfile} from '../../Store/Form-data/Resume-data/resume-data-selector';




const DataForm =()=> {

	const profile = useSelector(selectProfile);

	const {name,email,phone} = profile




	const dispatch = useDispatch();

	const handleData =(event)=>{

	console.log(event.target.name, 'NAME')
	const {name,value} = event.target
	

	dispatch(
			setProfile({...profile,[name]:value})
		)

}
	

	return (
		<form>
		<div>
		<h3>Profile</h3>
		Name<input onChange={handleData} name='name' value = {name}type= 'text'/>
		Email<input onChange={handleData} name = 'email' value = {email}type = 'email'/>
		Phone<input onChange={handleData} name = 'phone'  type = 'text' value={phone}/>
		<input name ='Save'  type = 'submit'/>

		



		</div>								
		
		</form>


		)





};


export default DataForm;