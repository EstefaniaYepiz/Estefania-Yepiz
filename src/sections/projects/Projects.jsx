import styles from "./ProjectsStyles.module.css";
import login from "../../assets/login.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
	return (
		<section id="projects" className={styles.container}>
			<h1 className="sectionTitle">Projects</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard
					src={login}
					link="https://github.com/EstefaniaYepiz/Log-in_Sign-up_form/tree/main/log-in_sign-up_form"
					h3="Login Form"
					p="Login/Sig Up form"
				/>
			</div>
		</section>
	);
}

export default Projects;
