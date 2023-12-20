
import {Document_001,Document_002} from './document-types';



export const createDocument = (data) => {



console.log(data.name, 'DATA.NAME')


    switch(data.doctype){
    case '001':
         return(<>{Document_002(data)}</>)


    default:
        return(<>{Document_001()}</>);

    }


 


};

 




//     return(

//      <Document>
//           <Page size ='A4'>
         

//          <Text>Hellooo</Text>
                    
//                         <Svg height="210" width="500">
//                               <Path
//       d="M10 10 L100 10"
//       stroke="black"
//       strokeWidth={2}
//     />
//                         </Svg>

          
  
//        </Page>



          
//         </Document>

    
    
//  )

// };
