import './templates-container.styles.scss'
import DocTemplate from '../../Components/Template/template'
// ../../Assets/navlogo.png


const TemplatesContainer = () => {





	return(

		<div>
			<h1> Let's Get Started by Choosing a Template</h1>	


					<div className = 'templates-container'>
				
					<DocTemplate name = {'002'}/>
					<DocTemplate name = {'001'}/>
					<DocTemplate name = {'002'}/>
					
					<DocTemplate name = {'001'}/>
					</div>

		</div>	



 

		)



}

export default TemplatesContainer