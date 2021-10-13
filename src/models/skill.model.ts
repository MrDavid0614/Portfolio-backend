import { Collection } from 'mongodb';
import database from '../db';
import { Skill } from '../types/skill';

export default class SkillModel {
    private skills: Collection<Skill>;

    constructor() {
        this.skills = database.collection<Skill>('skills');
    }

    async getAll() {
        const skills = await this.skills.find().toArray();
        return skills;
    }
}