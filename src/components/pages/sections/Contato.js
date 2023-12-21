import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


import Input from "../../form/Input";
import Container from "../../layout/Container";
import Espacamento from "../../layout/Espacamento";
import HeadingSection from "../../layout/HeadingSection";

import styles from './Contato.module.css';
import SubmitButton from "../../form/SubmitButton";
import IconContent from "../../layout/IconContent";

function Contato() {

    const [email, setEmail] = useState({})

    function handleChange(e) {
        setEmail({ ...email, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
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
    )
}

export default Contato;