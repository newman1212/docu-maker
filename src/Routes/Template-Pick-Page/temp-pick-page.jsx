import './temp-pick-page.scss';
import PickTemplate from '../../Components/Template-Pick/template-pick';
import {useNavigate} from 'react-router-dom'



const TempsPick = () => {






  const navigate = useNavigate()



const goToDoc = () => navigate('/preview');
 


	return(

		<div>
				<PickTemplate name ={'001'}/>
				<PickTemplate name ={'002'} />
				<PickTemplate name ={'001'} />
				<PickTemplate name ={'002'} />

				<button onClick={goToDoc}>View Document</button>
		</div>







		)











}




export default TempsPick;