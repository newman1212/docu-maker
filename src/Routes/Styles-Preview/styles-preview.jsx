import './styles-preview.scss';
import {Outlet} from 'react-router-dom';
import DocView from '../../Components/Doc-view/doc-view'




const StylesPreview = () => {













	return(

		<div className = 'authentication-container'>
		<Outlet/>
		<DocView/>
	
		</div>




		)
}

export default StylesPreview;

