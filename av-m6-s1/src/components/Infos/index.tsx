import './styles.css'




export default function Infos({infosObject}:any) {
  console.log(infosObject['1'])
  return (
    <div>
      
      <ul className='infos-list'>
      <li id='infos-title'>VOCÊ RECEBERÁ:</li>
        <li className='infos-list-item'>
            <span className='infos-list-item-data'>Amanhã: <span className='infos-list-item-valor'>R$ ${infosObject['1']}</span></span>
        </li>
        <li className='infos-list-item'>
            <span className='infos-list-item-data'>Em 15 dias: <span className='infos-list-item-valor'>R$ ${infosObject['15']}</span></span>
        </li>
        <li className='infos-list-item'>
            <span className='infos-list-item-data'>Em 30 dias: <span className='infos-list-item-valor'>R$ ${infosObject['30']}</span></span>
        </li>
        <li className='infos-list-item'>
            <span className='infos-list-item-data'>Em 90 dias: <span className='infos-list-item-valor'>R$ ${infosObject['90']}</span></span>
        </li>
        
      </ul>


    </div>
  )
}
