import { Router } from 'express';
import { Skill } from '../types/skill';
import { Project } from '../types/project';
import SkillsController from '../controllers/skill.controller';
import ProjectsController from '../controllers/project.controller';

const skillsController: SkillsController = new SkillsController();
const projectsController: ProjectsController = new ProjectsController();

const router: Router = Router();
const skillsRoute: Router = Router()
const projectsRoute: Router = Router();

skillsRoute.get('/', async (req, res) => {
    const skills: Skill[] = await skillsController.getAll();
    res.send(skills);
});

projectsRoute.get('/', async (req, res) => {
    const projects: Project[] = await projectsController.getAll();
    res.send(projects);
});

projectsRoute.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const project = await projectsController.getById(id);
    if (project){
        res.send(project);
        return;
    }

    res.status(404);
    res.send({ error: "This project doesn't exist." });
});

router.use('/skills', skillsRoute);
router.use('/projects', projectsRoute);

export default router;