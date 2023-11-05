import {StyleSheet,Font } from '@react-pdf/renderer';
import RobotoBold from './fonts/Roboto-Bold.ttf';
import RobotoThin from './fonts/Roboto-Thin.ttf';
import RobotoRegular from './fonts/Roboto-Regular.ttf';



// Add fonts and register them with Font.register()


Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: RobotoBold,
      fontStyle: 'bold',
      fontWeight: 'bold',
    },
      {
      src: RobotoThin,
      fontStyle: 'normal',
      fontWeight: 'thin',
    },
     {
      src: RobotoRegular,
      fontStyle: 'regular',
      fontWeight: 'regular',
    }

  ],
});



export const styles = StyleSheet.create({

    resumeContentAll: {

      padding:40,
      marginTop: 10



    },

    resumeDetail:{
       display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    },

         section: {
    width: '48%',
    marginBottom: 10,

     },

         sectionItem: {
    marginBottom: 20,
  },
          sectionTitle: {
    marginBottom: 10,
    fontSize : 15,
  },

    resumeHeader: {
    marginBottom: 20,
    fontSize: 25
     },

    


  resumeHeaderContent: {
    fontSize: 15,
    color: '#333333',
    marginBottom: 10, // Add margin-bottom to create vertical spacing
  },

  resumeContent: {
    display: 'flex',
    flexDirection: 'column',
    height: 50,
    justifyContent: 'space-between',
    fontSize: 10,
    color: '#333333',
  },

// GENERAL -----------------------------------------------------------------------------------------------------------//


  
// SUMMARY SECTION BEGINS ----------------------------------------------------------------------------------------------//

         profSum: {
    marginBottom: 20,
     },


// SUMMARY SECTION ENDS-------------------------------------------------------------------------------------------------- //








// CONTACT SECTION BEGINS-------------------------------------------------------------------------- //  

        contactContainer: {
        flexDirection: 'column', // Display child elements in a column
        // alignItems: 'center', // Center child elements horizontally
        justifyContent: 'center', // Center child elements vertically
        padding: 0, // Adjust the padding as needed to create space around the child elements
    },


   contContent: {
    display: 'flex',
    flexDirection: 'column',
    height: 100,
    justifyContent: 'space-between',
    fontSize: 10,
    color: '#333333',
  },

     phoneSection: {
    flexDirection: 'row', // Display items in a row
    alignItems: '', // Align items vertically in the center
  },

     emailSection: {
    flexDirection: 'row', // Display items in a row
    alignItems: ""
  },

      webSection: {
    flexDirection: 'row', // Display items in a row
    alignItems: ""
  },

      addressSection: {
    flexDirection: 'row', // Display items in a row
    alignItems: ""
  },

  icon: {
    width: 25, // Adjust the width as needed
    height: 45, // Adjust the height as needed
    marginRight: 2, // Add spacing between icon and text
  },

    homeIcon: {
    width: 25, // Adjust the width as needed
    height: 40, // Adjust the height as needed
    marginRight: 2, // Add spacing between icon and text
  },

  text : {

    fontSize : 10,
  },

  
// CONTACT SECTION ENDS -------------------------------------------------------------------------------------------------//




// EDUCATION SECTION BEGINS //

     educationContainer: {
        flexDirection: 'column', // Display child elements in a column
        // alignItems: 'center', // Center child elements horizontally
        justifyContent: 'center', // Center child elements vertically
        padding: 0, // Adjust the padding as needed to create space around the child elements
    },
    educationContent: {
        marginBottom: 10, // Adjust the margin as needed to control the spacing between child elements
          fontSize: 10,
        color: '#000000',
        
    },

    schoolText: {

        fontSize: 12,
        marginBottom: 3,
       
    },
       courseText: {
        fontSize: 10,
        marginBottom: 3,
        

    },





// EDUCATION SECTION ENDS------------------------------------------------------------------------------------------------ //





// SKILLS SECTION BEGINS //  


  skillsContent: {
    marginBottom: 10, // Adjust the margin as needed to control the spacing between child elements
    fontSize: 10,
    color: '#333333'  
  },

  skill: {
       marginBottom: 5,
        // fontSize: 10,
        // color: '#333333'
  },





// SKILLS SECTION ENDS ------------------------------------------------------------------------------------------------------ // 




// WORK EXPERIENCE SECTION BEGINS // 

      workExp: {
    width: '48%',
    height: '70%',
    marginBottom: 40,
  },

    workExpContainer: {
        flexDirection: 'column', // Display child elements in a column
        // alignItems: 'center', // Center child elements horizontally
        justifyContent: 'center', // Center child elements vertically
        padding: 0, // Adjust the padding as needed to create space around the child elements
    },
    expHeader: {
        marginBottom: 5, // Adjust the margin as needed to control the spacing between child elements
    },
  expHeaderContent: {
         marginBottom: 3,
         fontWeight : 10,
         fontSize: 12, 
    },

      expContent: {
        marginBottom: 10, // Adjust the margin as needed to control the spacing between child elements
    },
        expDuties: {
        marginBottom: 5, // Adjust the margin as needed to control the spacing between child elements
          fontSize: 10,
        color: '#333333',
    },


// WORK EXPERIENCE SECTION ENDS ----------------------------------------------------------------------------------------------------- //  


})









 







