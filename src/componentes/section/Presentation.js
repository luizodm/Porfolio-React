import styles from "./Presentation.module.css"
import ButtonA from "../elements/ButtonA"

function Presentation() {
    return (
        <div className={styles.Presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou o Luiz Otávio D'avila!</h1>
            <p>Apaixonado por tecnologia e soluções inovadoras. <br />
                Como Desenvolvedor Full Stack e Arquiteto de Softwares, estou sempre buscando <br />
                alternativas inovadoras para garantir bons resultados aos negócios. <br />
                Com graduação em Engenharia Civil e pós-graduação em Gerenciamento de Projetos, utilizo <br />
                o conhecimento adquirido para atingir tais resultados, sempre buscando novos desafios a superar.<br />
            </p>
            <ButtonA link="https://github.com/luizodm" text="Conecte-se comigo!" />
        </div>
    )
}

export default Presentation