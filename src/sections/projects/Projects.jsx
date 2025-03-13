import styles from "./ProjectsStyles.module.css";
import login from "../../assets/login.png";
import portfolio from "../../assets/portfolio.png";
import todo from "../../assets/todo.png";
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
				<ProjectCard
					src={portfolio}
					link="https://github.com/EstefaniaYepiz/Estefania-Yepiz"
					h3="Portfolio"
					p="This portfolio"
				/>
				<ProjectCard
					src={todo}
					link="https://github.com/EstefaniaYepiz/Todo-List#"
					h3="Todo List"
					p="Simple todo list"
				/>
			</div>
		</section>
	);
}

export default Projects;
