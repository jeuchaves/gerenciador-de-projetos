import styles from './NewProject.module.css';

import ProjectForm from '../project/ProjectForm';

import { useNavigate } from 'react-router';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

function NewProject() {

    const Navigate = useNavigate();

    function createPost(project) {

        // initialize const and services
        project.cost = 0;
        project.services = [];

        const handleAddProject = async () => {
            try {
                const db = getFirestore();
                const projectCollection = collection(db, 'projects');

                await addDoc(projectCollection, project);
                Navigate('/projects', {
                    state: {
                        message: 'Projeto criado com sucesso!'
                    }
                })
            } catch(error) {
                console.error(error);
            }
        }

        handleAddProject();
    }

    return (
        <div className={styles.newProjectContainer}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    );
}

export default NewProject;