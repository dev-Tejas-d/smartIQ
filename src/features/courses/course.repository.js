import mongoose from "mongoose";
import { CourseSchema } from "./course.Schema.js";

const courseModel = mongoose.model("Course", CourseSchema);

export default class CourseRepository{
    //add course to database, only user with role adim(todo) should access
    async addCourse(courseDetail){
        try{
            let newCourse = new courseModel(courseDetail);
            await newCourse.save();
            return {
                status:"Success",
                result:newCourse
            }
        }
        catch(error){
            console.log(error);
            throw new Error(error)
        }
    };

    async getCourses(){
        try{
            let result = await courseModel.find();
            return result
        }
        catch(error){
            throw new Error(error)
        }
    };

    async deleteCourse(id){
        let course = await courseModel.findByIdAndDelete(id)
        if(!course){
            return "wrong Id"
        }
        return {
            status:"Deleted succesfully",
            result:course
        }
    }
}   