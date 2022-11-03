import ProjetosForm from '../project/projectForm'
import styles from './NovoProjeto.module.css' 

export default function NovoProjeto(){
  return(
    <div className={styles.novoContainer}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjetosForm btnText="Criar projeto"/>
    </div>
  )
}