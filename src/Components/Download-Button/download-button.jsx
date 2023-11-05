import './download-button.scss';
import {createDocument} from '../Document-Component/document.component';
import {PDFDownloadLink} from '@react-pdf/renderer';
import {useSelector} from 'react-redux';
import {selectProfile} from '../../Store/Form-data/Resume-data/resume-data-selector';


const DownloadButton = () => {

	 const profile = useSelector(selectProfile);
	 console.log(profile, 'PROOOOFILE')





	return(
	<PDFDownloadLink document={createDocument(profile)} fileName="resume.pdf">
      {({ blob, url, loading, error }) =>
        error ? (console.log(error,"DownloadButton ERRRORRR")) : <button>Download</button> 
        
      }
    </PDFDownloadLink>


		)





}


export default DownloadButton;