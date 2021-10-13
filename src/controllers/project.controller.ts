import ProjectModel from "../models/project.model";

export default class ProjectController {
    private projectModel: ProjectModel;

    constructor() {
        this.projectModel = new ProjectModel();
    }

    async getAll() {
        return await this.projectModel.getAll();
    }

    async getById(id: number) {
        return await this.projectModel.getById(id);
    }
}