import './styles.css'
import Form from '../Form'
import Infos from '../Infos'
import { useState } from 'react'


export default function Body() {
  const [infosObject,setInfosObject] = useState({
    1: 0,
    15:0,
    30:0,
    90:0
  })
  return (
    <div className='main-container'>
        <div className='form-container'>
            <Form setInfosObject={setInfosObject}/>
            
        </div>

        <div className='infos-container'>
          <Infos infosObject={infosObject}/>
          
          </div>


    </div>
  )
}
