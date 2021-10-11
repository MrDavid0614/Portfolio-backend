import { Router } from 'express';
import { Skill } from '../models/skill';
import SkillsService from '../services/skills.service';

const skillsRoute: Router = Router()
const skillsService: SkillsService = new SkillsService();

skillsRoute.get('/', async (req, res) => {
    const skills: Skill[] = await skillsService.getAll();
    res.send(skills);
});

export default skillsRoute;