import styles from './Home.module.css';
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';
import HeadingSection from '../layout/HeadingSection';

function Home() {

    return (
        <div>
            <section className={styles.st_hero}>
                <div className="container">
                    <h3>Olá, eu sou</h3>
                    <h1>Jeú Chaves</h1>
                    <h2>Desenvolvedor Web</h2>
                    <LinkButton text="Fale comigo" />
                </div>
            </section>
            <section className={styles.st_sobre}>
                <div className="st_height_b80"></div>
                <div className="container">
                    <HeadingSection titulo="Sobre mim" />
                    <div className="st_height_b25"></div>
                    <div className={styles.st_sobre__image} style={{backgroundImage:  `url("https://placekitten.com/g/600/600")`}}></div>
                    
                </div>
            </section>
        </div>
    );
}

export default Home;