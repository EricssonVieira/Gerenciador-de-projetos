import {FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa'
import styles from './Footer.module.css';

export default function Footer(){
  return(
    <div className={styles.footer}>
      <ul className={styles.lista}>
        <li className={styles.social}>
          <FaFacebook/>
        </li>
        <li className={styles.social}>
          <FaInstagram/>
        </li>
        <li className={styles.social}>
          <FaGithub/>
        </li>
      </ul>
      <p className={styles.copyright}><span>AindaNaoTemNome</span> &copy;2022</p>
    </div>
  )
}