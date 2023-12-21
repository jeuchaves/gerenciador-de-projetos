import BarrasDeProgressos from "../../layout/BarrasDeProgressos";
import Container from "../../layout/Container";
import Espacamento from "../../layout/Espacamento";
import HeadingSection from "../../layout/HeadingSection";

import styles from './Habilidades.module.css';

function Habilidades() {
    return (
        <section className={styles.st_habilidades}>
            <Espacamento altura="80" />
            <Container>
                <HeadingSection titulo="Habilidades" />
                <Espacamento altura="25" />
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores.
                    <br /><br />
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores.
                </p>
                <Espacamento altura="30" />
                <BarrasDeProgressos />
            </Container>
        </section>
    )
}

export default Habilidades;