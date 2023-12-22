import { useState } from "react"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import Espacamento from '../layout/Espacamento'
import HeadingSection from '../layout/HeadingSection'
import BarrasDeProgressos from '../layout/BarrasDeProgressos'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import IconContent from '../layout/IconContent'

import styles from './Home.module.css'
import SocialLinkContainer from "../layout/SocialLinkContainer.js"

function Home() {

    const [email, setEmail] = useState({})

    function handleChange(e) {
        setEmail({ ...email, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    return (
        <>
            <section className={styles.st_hero} id="st_hero">
                <Container>
                    <h3>Olá, eu sou</h3>
                    <h1>Jeú<br />Chaves</h1>
                    <h2>Desenvolvedor Web</h2>
                    <LinkButton text="Fale comigo" />
                </Container>
                <div className={styles.st_hero__image}>
                    <img src="https://placekitten.com/g/850/850" alt="" />
                    <SocialLinkContainer />
                </div>
            </section>
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
                        <li><span>Nascimento</span>:<span>09 de Agosto de 2000</span></li>
                        <li><span>Telefone</span>:<span>(67) 99897 5866</span></li>
                        <li><span>Endereço</span>:<span>Campo Grande, MS</span></li>
                        <li><span>Idioma</span>:<span>Português e Inglês</span></li>
                        <li><span>Freelance</span>:<span>Disponível</span></li>
                    </ul>
                    <Espacamento altura="43" />
                    <LinkButton text="Download CV" />
                </Container>
            </section>
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
            <section className={styles.st_contato}>
                <Espacamento altura="80" />
                <Container>
                    <HeadingSection titulo="Fale comigo" />
                    <Espacamento altura="25" />
                </Container>
                <Container>
                    <h3>Envie uma mensagem</h3>
                    <form onSubmit={submit}>
                        <Input
                            type="text"
                            text="Nome"
                            name="name"
                            placeholder="Seu nome"
                            handleOnChange={handleChange}
                            value={email.name ? email.name : ''}
                        />
                        <Input
                            type="email"
                            text="Email"
                            name="email"
                            placeholder="Seu e-mail"
                            handleOnChange={handleChange}
                            value={email.email ? email.email : ''}
                        />
                        <Input
                            type="text"
                            text="Assunto"
                            name="subject"
                            placeholder="Seu assunto"
                            handleOnChange={handleChange}
                            value={email.subject ? email.subject : ''}
                        />
                        <Input
                            type="textarea"
                            text="Mensagem"
                            name="message"
                            placeholder="Sua mensagem"
                            handleOnChange={handleChange}
                            value={email.message ? email.message : ''}
                        />
                        <SubmitButton text="Enviar mensagem" />
                    </form>
                    <Espacamento altura="30" />
                    <Espacamento altura="40" />
                    <h3>Informações de Contato</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores.
                    </p>
                    <IconContent
                        title="E-mail"
                        text="jeuchaveslima@gmail.com"
                        icon={<FaEnvelope />}
                    />
                    <IconContent
                        title="Phone"
                        text="(67) 99897 5866"
                        icon={<FaPhoneAlt />}
                    />
                    <IconContent
                        title="Endereço"
                        text="Campo Grande, MS"
                        icon={<FaMapMarkerAlt />}
                    />
                    <h4>Visite minhas redes sociais</h4>
                    <div className={styles.social_icons}>
                        <IconContent
                            icon={<FaInstagram />}
                            visibleContent={false}
                        />
                        <IconContent
                            title="E-mail"
                            text="jeuchaveslima@gmail.com"
                            icon={<FaLinkedin />}
                            visibleContent={false}
                        />
                        <IconContent
                            title="E-mail"
                            text="jeuchaveslima@gmail.com"
                            icon={<FaGithub />}
                            visibleContent={false}
                        />
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Home;