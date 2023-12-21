import Container from "../../layout/Container";
import Espacamento from "../../layout/Espacamento";
import HeadingSection from "../../layout/HeadingSection";
import LinkButton from "../../layout/LinkButton";

import styles from './SobreMim.module.css';

function SobreMim() {
    return (
        <section className={styles.st_sobre}>
            <Espacamento altura="80" />
            <Container>
                <HeadingSection titulo="Sobre mim" />
                <Espacamento altura="25" />
                <div className={styles.st_sobre__image} style={{ backgroundImage: `url("https://placekitten.com/g/600/600")` }}></div>
                <Espacamento altura="30" />
                <p>
                    Em 2016, descobri a programação e em 2018 iniciei minha carreira como estagiário. Desenvolvi habilidades em <strong>HTML, CSS, JavaScript, Bootstrap e Git.</strong> Por agora, estou focado em aprender <strong>React</strong>
                    <br></br>
                    Este portfólio é meu projeto mais recente, refletindo minha jornada e as tecnologias que venho explorando.
                </p>
                <ul>
                    <li>
                        <span>Nascimento</span>
                        :
                        <span>09 de Agosto de 2000</span>
                    </li>
                    <li>
                        <span>Telefone</span>
                        :
                        <span>(67) 99897 5866</span>
                    </li>
                    <li>
                        <span>Endereço</span>
                        :
                        <span>Campo Grande, MS</span>
                    </li>
                    <li>
                        <span>Idioma</span>
                        :
                        <span>Português e Inglês</span>
                    </li>
                    <li>
                        <span>Freelance</span>
                        :
                        <span>Disponível</span>
                    </li>
                </ul>
                <Espacamento altura="43" />
                <LinkButton text="Download CV" />
            </Container>
        </section>
    )
}

export default SobreMim;