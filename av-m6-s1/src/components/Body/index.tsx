import './styles.css'
import Form from '../Form'
import Infos from '../Infos'


export default function Body() {
  return (
    <div className='main-container'>
        <div className='form-container'>
            <Form/>
            
        </div>

        <div className='infos-container'>
          <Infos/>
          
          </div>


    </div>
  )
}
