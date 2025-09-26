import CourseRepository from "./course.repository.js";


export default class CourseController{
    constructor(){
        this.courseRepository = new CourseRepository();
    }

    async addCourse(req, res){
        try{
            let {name,teacher,lecture} = req.body;
            let result = await this.courseRepository.addCourse({name, teacher, lecture});
            if(!result){
                res.status(400).send("Something went wrong")
            }
            res.status(200).send(result);
        }
        catch(error){
            throw new Error(error)
        }
    };

    async getAll(req, res){
        try{
            let result = await this.courseRepository.getCourses();
            res.status(200).send(result);
        }
        catch(error){
            throw new Error(error);
        }
    }

    async deleteCourse(req, res){
        try{
            let {id} = req.params;
            let result = await this.courseRepository.deleteCourse(id)
            res.status(200).send(result)
        }
        catch(error){
            throw new Error(error)
        }
    }
}