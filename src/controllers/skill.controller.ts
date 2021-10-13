import SkillModel from "../models/skill.model";

export default class SkillController {
    private skillModel: SkillModel;

    constructor() {
        this.skillModel = new SkillModel();
    }

    async getAll() {
        return await this.skillModel.getAll();
    }
}
