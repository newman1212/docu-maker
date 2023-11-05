import './Home.scss'
import {useNavigate} from 'react-router-dom'

const Home = ()=> {

	const navigate = useNavigate()
 
 const goToTemplates = () => navigate('/templates')



	return (
		<div>
		<h1> Welcome To DocuMaker</h1>
		<button onClick={goToTemplates}>Choose Template</button>
		</div>

		)
}

export default Home;