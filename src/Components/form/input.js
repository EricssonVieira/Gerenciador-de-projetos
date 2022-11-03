import styles from './input.module.css'

export default function Input({type, text, name, placeholder, handleOnChange, value,min}){
  return(
      <div 
        className={styles.formControl}>
      <label
        className={styles.label} 
        htmlFor={name}>{text}
      </label>
      <input 
        className={styles.input} 
        type={type} 
        id={name} 
        name={name} 
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        min={min}/>
    
    </div>
  )
}