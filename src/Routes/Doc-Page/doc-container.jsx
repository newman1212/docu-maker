import './doc-container.scss';
// import {PDFDownloadLink} from '@react-pdf/renderer';
import MyDocument from '../../Components/Document-Component/document.component'
// import DocView from '../../Components/Doc-view/doc-view'
import DownloadButton from '../../Components/Download-Button/download-button'
import {useNavigate,Outlet} from 'react-router-dom'


const DocPage = () => {

  const navigate = useNavigate();

  const goToEdit = ()=> navigate('/edit')


  // const HandleDownload = () => {

  //   ReactPDF.render(<MyDocument />, `./`)

  //   console.log('done')


  // }

  const goToDownload = ()=> navigate('/download')

  const goToStyles = ()=> navigate('/styles')







  return(
  

        <>
        <button onClick={goToEdit}>Edit</button>
        <button onClick={goToDownload}>Download</button>
        <button onClick={goToStyles}>View With Different Templates</button>

      <Outlet/>
    
     

        </>



    )

// ReactPDF.render(<MyDocument/>);

};

export default DocPage;







// import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

// const MyDoc = () => (
//   <Document>
//     <Page>
//       // My document data
//     </Page>
//   </Document>
// );

// const App = () => (
//   <div>
//     <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
//       {({ blob, url, loading, error }) =>
//         loading ? 'Loading document...' : 'Download now!'
//       }
//     </PDFDownloadLink>
//   </div>
// );