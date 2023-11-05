import './editinghub.scss';
import DataForm from '../../Components/Forms/form';
import {useNavigate,Outlet} from 'react-router-dom'



const EditingHub = () =>{

const navigate = useNavigate();


const goToDoc = () => navigate('/preview');






	return(

		<>
			<button onClick={goToDoc}>View Document</button>

			<div className='authentication-container'>
			<DataForm/>
			<Outlet/>

			</div>
		</>

		)





};
export default EditingHub;