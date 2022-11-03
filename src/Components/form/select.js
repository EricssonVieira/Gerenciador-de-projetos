import styles from './select.module.css'

export default function Select({options, text, name, handleOnChange, value}){
  return(
      <div 
        className={styles.formControl}>
      <label
        htmlFor={name}>{text}
      </label>
      <select 
        id={name} 
        name={name} 
        >
          <option>Selecione a categoria</option>
        </select>
    
    </div>
  )
} 