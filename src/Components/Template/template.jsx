import './template.style.scss';
import {useNavigate} from 'react-router-dom'
import {setProfile} from '../../Store/Form-data/Resume-data/resume-data-action';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {selectProfile} from '../../Store/Form-data/Resume-data/resume-data-selector';







const DocTemplate = ({name}) => {




  const profile = useSelector(selectProfile);




  const dispatch = useDispatch();

  const navigate = useNavigate()
 
 const goToEdit = (data) => {

    dispatch(
      setProfile({...profile,doctype:data})
    );

  navigate('/edit');
}




  return(
        <div className= 'product-card-container'>

          <div>
            <img src ='https://www.my-resume-templates.com/wp-content/uploads/2023/05/student-resume-example.jpg'
             alt = 'template'/>
             
            <button onClick={()=>goToEdit(name)}>Use Template</button>
          </div>

        </div>



    )


}



export default DocTemplate; 