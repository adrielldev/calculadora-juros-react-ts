import './styles.css'

export default function Form() {
  return (
    <form>
      <span id='form-title'>
                Simule sua antecipação
            </span>
      <label>
        <span className='label-input'>Informe o valor da venda *</span>
        <input type="text"></input>
      </label>
      <label>
        <span className='label-input'>Em quantas parcelas *</span>
        <input type="text"></input>
        <span id='footer-input-parcelas'>No máximo 12 parcelas</span>
      </label>
      <label>
        <span className='label-input'>Informe o percentual de MDR *</span>
        <input type="text"></input>
      </label>

    </form>
  )
}
