import styles from "./Footer.module.css"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href="https://www.instagram.com/luizodm/"><FaInstagram size={30} /></a></li>
                <li><a href="https://github.com/luizodm"><FaGithub size={30} /></a></li>
                <li><a href="https://www.linkedin.com/in/luiz-ot%C3%A1vio-d-avila-martins-53554b120/"><FaLinkedin size={30} /></a></li>
            </ul>
            <p>luizd.avila@hotmail.com</p>
            <p>Luiz Otávio D'avila © 2024</p>
        </div>
    )
}

export default Footer