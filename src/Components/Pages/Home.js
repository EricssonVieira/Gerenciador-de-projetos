import saving from "../layouts/img/savings.png";
import LinkButton from "../layouts/LinkButton";
import styles from "./Home.module.css";

export default function Home(){
  return(
    <section className={styles.homeContainer}>
      <h1>Bem-Vindo  ao <span>Costs</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/novoprojeto" text="Criar projeto"/>
      <img src={saving}/>
    </section>
  )
}