import { Collection, Db } from 'mongodb';
import client from '../db';
import { Project } from '../models/project';

export default class ProjectsService {
    private database: Db;
    private projects: Collection<Project>;

    constructor() {
        this.database = client.db('Portfolio');
        this.projects = this.database.collection<Project>('projects');
    }

    async getAll() {
        const projects = await this.projects.find().toArray();
        return projects;
    }

    async getById(id: number) {
        const project = await this.projects.findOne({ id });
        return project;
    }
}