import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.css';
import Container from './Container';

function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <p>
                    © 2023. Feito por Jeú Chaves.
                    <br />
                    Todos os direitos reservados.
                </p>
            </Container>
        </footer>
    );
}

export default Footer;