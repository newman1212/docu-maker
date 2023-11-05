import {Svg,Document, Page, Text, View,Line,Image } from '@react-pdf/renderer';
import {styles} from './document.styles';
import {phoneIcon,emailIcon, globeIcon,homeIcon} from './assets'






export const Document_001 = (data) =>{

return(  

    <Document>
          <Page size ='A4'>

          <view></view>

   
            <view style = {styles.resumeContentAll} >
                     <view style = {styles.resumeHeader} >
                             <Text>ELEANOR FITZGERALD</Text>
                             <Text style={styles.resumeHeaderContent}>WEB DEVELOPER</Text>
                     </view>




                     <view style = {styles.profSum}>
                        <Text style = {styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
                        <Text style = {styles.resumeContent}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore.
                        </Text>
                     </view>



                        <view style={styles.resumeDetail}>

                                 <view style={styles.section}>
                                    <view style= {styles.sectionItem}>
                                        <Text style = {styles.sectionTitle}>CONTACT</Text>


                                            <view style= {styles.contContent} >
                                                <view style= {styles.phoneSection}>
                                                    <view style= {styles.icon}>{phoneIcon()}</view> 
                                                    <Text  style= {styles.text}>Phone</Text>
                                                 </view>


                                                <view style= {styles.emailSection}>
                                                    <view style= {styles.icon}>{emailIcon()}</view> 
                                                    <Text  style= {styles.text}>Email</Text>
                                                 </view>



                                                <view style= {styles.webSection}>
                                                    <view style= {styles.icon}>{globeIcon()}</view> 
                                                    <Text  style= {styles.text}>Website</Text>
                                                 </view>




                                                <view style= {styles.addressSection}>
                                                    <view style= {styles.homeIcon}>{homeIcon()}</view> 
                                                    <Text  style= {styles.text}>Address</Text>
                                                 </view>



                                            </view>
                                       
                                    </view>





                                        <view style= {styles.sectionItem}>
                                            <Text style = {styles.sectionTitle}>EDUCATION</Text>
                                                <view style= {styles.educationContainer}>
                            
                                                    <view style= {styles.educationContent}  >
                                                        <Text style= {styles.schoolText}>Name of School or Institution</Text>
                                                        <Text style= {styles.courseText} >Programe Studied</Text>
                                                        <Text>Start Date - End Date</Text>
                                                    </view>

                                                  
                                                
                                                
                                                </view>

                                                 <view style= {styles.educationContainer}>
                            
                                                    <view style= {styles.educationContent}  >
                                                        <Text style= {styles.schoolText}>Name of School or Institution</Text>
                                                        <Text style= {styles.courseText} >Programe Studied</Text>
                                                        <Text>Start Date - End Date</Text>
                                                    </view>

                                                  
                                                
                                                
                                                </view>
                                        </view>
 


                                        <view style= {styles.sectionItem}>
                                            <Text style = {styles.sectionTitle}>SKILLS</Text>
                            
                                                <view style = {styles.skillsContent}>
                                                    <Text  style = {styles.skill} > First Skill</Text>
                                                    <Text  style = {styles.skill} > Another skill</Text>
                                                    <Text  style = {styles.skill} > more skills</Text>
                                                    

                                                    

                                                </view>
              
                                       
                                        </view>








                                 </view>

                    





                                            <view style={styles.workExp}>
                                                <Text style = {styles.sectionTitle}>WORK EXPERIENCE</Text>
                            
                                                        <view style= {styles.workExpContainer} >

                                                                    
                                                                    <view style= {styles.expContent}> 

                                                                            <view style= {styles.expHeader}  >
                                                                                <Text style= {styles.expHeaderContent}   >Company Name</Text>
                                                                                <Text style= {styles.expHeaderContent}  >Your Role</Text>
                                                                                <Text style= {styles.expHeaderContent}  >Start year - End Year</Text>
                                                                            </view>

                                                                             <view>
                                                                              <Text  style = {styles.expDuties}>my duty was tis that and thiiss ananan snsnnsnsa annnns adjn snna jashhjjs ahhajsjjsahjs anjdjdjhhjaj</Text>
                                                                               <Text  style = {styles.expDuties}>my duty was tis that and thiiss</Text>
                                                                                <Text  style = {styles.expDuties}>my duty was tis that and thiiss</Text>
                                                                                                      
                                                                                
                                                                              
                                                                            </view>


                                                                    </view>

                                                                    
                                                                   

                                                                     







                                                        </view>
                                                         
                                              

                                            </view>



                                </view>





        











             </view>
  
       </Page>



          
        </Document>

      

    )

};



export const Document_002 = (data) => {

            return(  <Document>
                    <Page size ='A4'>
                        <view>
                         </view>
              
                   </Page>

                    </Document>

                )

};

 






