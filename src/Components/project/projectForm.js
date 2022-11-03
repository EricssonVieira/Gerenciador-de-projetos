import styles from './projectForm.module.css'
import Input from '../form/input.js'
import Select from '../form/select.js'
import SubmitButton from '../form/submitButton'

export default function ProjetosForm({btnText}){
  return(
    <form className={styles.form}>
      <div>
        <Input type="text" placeholder="Insira o nome do projeto" name="name" text="Nome do projeto"/>
      </div>
      <div> 
        <Input type="number" placeholder="Insira o valor do orçamento total" name="budget" text="Orçamento do projeto" min="0"/>
      </div>
      <div>
        <Select name="category_id" text="Selecione a categoria" />
      <div>
        <SubmitButton text={btnText}/>
      </div>
      </div>
    </form>
  )
}