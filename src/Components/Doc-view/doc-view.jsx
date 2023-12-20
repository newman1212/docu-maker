import './doc-view.scss';
import {createDocument} from '../Document-Component/document.component';
import {useSelector} from 'react-redux';
import {selectProfile} from '../../Store/Form-data/Resume-data/resume-data-selector';
import { PDFViewer } from '@react-pdf/renderer';




const DocView = () => {



    const profile = useSelector(selectProfile);

    console.log(profile, "PROFILE")
   


	return(

			<div>
			<PDFViewer width ='800' height = '500' showToolbar= {false}>
	 			{createDocument(profile)}
 			</PDFViewer>
	 		</div>
	 	
	


		)
}



export default DocView;

