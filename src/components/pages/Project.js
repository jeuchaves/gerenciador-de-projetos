import styles from './Project.module.css';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc, runTransaction } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import Loading from '../layout/Loading';
import Container from '../layout/Container';
import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message';
import ServiceForm from '../service/ServiceForm';
import ServiceCard from '../service/ServiceCard';

function Project() {

	const { id } = useParams();

	const [project, setProject] = useState([]);
	const [services, setServices] = useState([]);
	const [showProjectForm, setShowProjectForm] = useState(false);
	const [showServiceForm, setShowServiceForm] = useState(false);
	const [message, setMessage] = useState();
	const [type, setType] = useState();

	useEffect(() => {
		const fetchProject = async () => {
			try {
				const db = getFirestore();
				const projectRef = doc(db, 'projects', id);	

				const projectDoc = await getDoc(projectRef);

				if (projectDoc.exists()) {
					const projectData = projectDoc.data();
					setProject(projectData);
					setServices(projectData.services);
				} else {
					console.log('Projeto não encontrado!');
				}
			} catch (error) {
				console.error(error);
			}
		}
		fetchProject();
	}, [id]);

	function editPost(project) {

		// Atualizar a mensagem
		// Fix: Flash mesage não aparece caso haja atualização consecutiva
		setMessage('');

		// Budget Validation
		if (project.budget < project.cost) {
			// mensagem
			setMessage('O orçamento não pode ser menor que o custo do projeto!');
			setType('error');
			return;
		}

		const updateProject = async () => {
			try {
				const db = getFirestore();
				const projectRef = doc(db, 'projects', id);

				await updateDoc(projectRef, project);

				setProject(project);

				setShowProjectForm(false);
				setMessage('Projeto atualizado!');
				setType('sucess');
			} catch (error) {
				console.error(error);
			}
		}
		updateProject();
	}

	function toggleProjectForm() {
		setShowProjectForm(!showProjectForm);
	}

	function toggleServiceForm() {
		setShowServiceForm(!showServiceForm);
	}

	function createService() {

		setMessage('');

		// Último serviço
		const lastService = project.services[project.services.length - 1];
		lastService.id = uuidv4();

		const lastServiceCost = lastService.cost;
		const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

		// Validação de valor máximo
		if (newCost > parseFloat(project.budget)) {
			// mensagem
			setMessage('Orçamento ultrapassado, verifique o valor do serviço!');
			setType('error');
			project.services.pop();
			return false;
		}

		// Adiciona o custo do projeto
		project.cost = newCost;

		const addService = async () => {
			try {
				const db = getFirestore();
				const projectRef = doc(db, 'projects', id);

				await updateDoc(projectRef, project);

				setMessage('Serviço adicionado');
				setType('sucess');
				setShowServiceForm(false);
			} catch (error) {
				console.log(error);
			}
		}
		addService();
	}

	function removeService(idService, cost) {
		
		const servicesUpdate = project.services.filter((service) => service.id !== idService);
		const projectUpdated = {...project};
		
		const updateService = async () => {
			try {

				const db = getFirestore();
				const projectRef = doc(db, 'projects', id);

				await runTransaction(db, async (transaction) => {
					const projectSnapshot = await transaction.get(projectRef);

					if(projectSnapshot.exists()) {
						transaction.update(projectRef, {
							services: servicesUpdate,
							cost: parseFloat(projectUpdated.cost) - parseFloat(cost),
						});
					} else {
						// Se o projeto não existe...
						setMessage('Serviço não encontrado.');	
						setType('error');
						return;
					}
				});

				setProject(projectUpdated);
				setServices(servicesUpdate);	
				setMessage('Serviço removido com sucesso');	
				setType('sucess');
			} catch (error) {
				console.error(error);
			}
		}
		updateService();
	}

	return (
		<>
			{project.name ? (
				<div className={styles.projectDetails}>
					<Container customClass="column">
						{message && <Message type={type} msg={message} />}
						<div className={styles.detailsContainer}>
							<h1>Projeto: {project.name}</h1>
							<button className={styles.btn} onClick={toggleProjectForm}>
								{!showProjectForm ? 'Editar Projeto' : 'Fechar'}
							</button>
							{!showProjectForm ? (
								<div className={styles.projectInfo}>
									<p>
										<span>Categoria:</span> {project.category.name}
									</p>
									<p>
										<span>Total de orçamento:</span> R${project.budget}
									</p>
									<p>
										<span>Total utilizado:</span> R${project.cost}
									</p>
								</div>
							) : (
								<div className={styles.projectInfo}>
									<ProjectForm
										handleSubmit={editPost}
										btnText="Concluir edição"
										projectData={project}
									/>
								</div>
							)}
						</div>
						<div className={styles.serviceFormContainer}>
							<h2>Adicione um serviço</h2>
							<button className={styles.btn} onClick={toggleServiceForm}>
								{!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
							</button>
							<div className={styles.projectInfo}>
								{showServiceForm && (
									<ServiceForm handleSubmit={createService} btnText="Adicionar serviço" projectData={project} />
								)}
							</div>
						</div>
						<div>
							<h2>Serviços</h2>
							<Container customClass="start">
								{services.length > 0 ? (
									services.map((service) => (
										<ServiceCard 
											id={service.id} 
											name={service.name}
											cost={service.cost}
											description={service.description}
											key={service.id}
											handleRemove={removeService}
										/>
									))
								) : (
									<p>Não há serviços cadastrados!</p>
								)}
							</Container>
						</div>
					</Container>
				</div>
			) : (
				<Loading />
			)}
		</>
	);
}

export default Project;