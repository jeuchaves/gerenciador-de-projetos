import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import Loading from "../layout/Loading";

import styles from './Projects.module.css';

function Projects() {

    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState('');

    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message;
    }

    // Receber projetos do Firebase
    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const projectCollection = collection(db, 'projects');
                const projectSnapshot = await getDocs(projectCollection);

                const projectList = projectSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProjects(projectList);
                setRemoveLoading(true);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    async function removeProject(id) {
        try {
            const db = getFirestore();
            const projectRef = doc(db, 'projects', id);

            await deleteDoc(projectRef);

            setProjects(projects.filter((project) => project.id !== id));
            setProjectMessage('Projeto removido com sucesso!');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Novo Projeto" />
            </div>
            {message && (
                <Message type="sucess" msg={message} />
            )}
            {projectMessage && (
                <Message type="sucess" msg={projectMessage} />
            )}
            <Container customClass="start">
                {projects.length > 0 && (
                    projects.map((project) => (
                        <ProjectCard
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))
                )}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>

        </div>
    );
}

export default Projects;