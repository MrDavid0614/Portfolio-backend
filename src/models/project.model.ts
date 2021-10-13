import { Collection } from 'mongodb';
import database from '../db';
import { Project } from '../types/project';

export default class ProjectModel {
    private projects: Collection<Project>;

    constructor() {
        this.projects = database.collection<Project>('projects');
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