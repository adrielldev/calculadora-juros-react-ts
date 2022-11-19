import './styles.css'
import { useState } from 'react'
import axios from 'axios'
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  amount: string,
  installments:string,
  mdr:string

};



export default function Form({setInfosObject}:any) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  

   const onSubmit:  SubmitHandler<Inputs> = async data => {
    await axios.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app',data)
    .then(res=>{
      setInfosObject(res.data)
    })
    .catch(err => console.log(err))

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span id='form-title'>
                Simule sua antecipação
            </span>
      <label>
        <span className='label-input'>Informe o valor da venda *</span>
        <input type="text"  {...register("amount")}></input>
      </label>
      <label>
        <span className='label-input'>Em quantas parcelas *</span>
        <input type="text" {...register("installments")}></input>
        <span id='footer-input-parcelas'>No máximo 12 parcelas</span>
      </label>
      <label>
        <span className='label-input'>Informe o percentual de MDR *</span>
        <input type="text" {...register("mdr")}></input>
      </label>
      <input type='submit' id='submit-button' value='Enviar'/>

    </form>
  )
}
