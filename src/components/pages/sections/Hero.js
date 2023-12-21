import Container from '../../layout/Container';
import LinkButton from '../../layout/LinkButton';
import styles from './Hero.module.css';

function Hero() {
    return (
        <section className={styles.st_hero}>
            <Container>
                <h3>Olá, eu sou</h3>
                <h1>Jeú Chaves</h1>
                <h2>Desenvolvedor Web</h2>
                <LinkButton text="Fale comigo" />
            </Container>
        </section>
    )
}

export default Hero;