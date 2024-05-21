import styles from "./Projects.module.css"
import ButtonB from "../elements/ButtonB"
import Card from "../elements/Card"
import lpdnc from "../../image/projects/lpdnc.svg"
import portfolio from "../../image/projects/portfolio.svg"

function Projects() {
    return (
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Card
                img={lpdnc}
                title="LP - DNC"
                tech="HTML, CSS e JS"
                description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
                repo="https://github.com/luizodm/Projeto-Landing-Page"
                site="" //SITE DO PROJETO APÓS FEITO UPLOAD
            />
            <Card
                img={portfolio}
                title="Portfolio React"
                tech="React"
                description="Desenvolvimento de um portfolio"
                repo="..."
                site="" //SITE DO PROJETO APÓS FEITO UPLOAD
            />
            <ButtonB text="Ver repositório completo" link="https://github.com/luizodm?tab=repositories" />
        </div>
    )
}

export default Projects