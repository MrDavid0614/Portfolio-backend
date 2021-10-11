import { Router } from 'express';
import { Project } from '../models/project';
import ProjectsService from '../services/projects.service';

const projectsRoute: Router = Router();
const projectsService: ProjectsService = new ProjectsService();

projectsRoute.get('/', async (req, res) => {
    const projects: Project[] = await projectsService.getAll();
    res.send(projects);
});

projectsRoute.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const project = await projectsService.getById(id);
    if (project){
        res.send(project);
        return;
    }

    res.status(404);
    res.send({ error: "This project doesn't exist." });
});

export default projectsRoute;