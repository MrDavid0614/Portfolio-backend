import { Collection, Db } from 'mongodb';
import client from '../db';
import { Skill } from '../models/skill';

export default class SkillsService {
    private database: Db;
    private skills: Collection<Skill>;

    constructor() {
        this.database = client.db('Portfolio');
        this.skills = this.database.collection<Skill>('skills');
    }

    async getAll() {
        const skills = await this.skills.find().toArray();
        return skills;
    }
}
