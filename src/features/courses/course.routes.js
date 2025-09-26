import express from "express"
import CourseController from "./course.controller.js"
import { jwtAuth } from "../../middleware/jwt.middleware.js"

let courseController = new CourseController();

let courseRouter = express.Router();

courseRouter.post("/add", jwtAuth, (req, res)=>{
    courseController.addCourse(req, res)
});
courseRouter.get('/getAll', (req, res)=>{
    courseController.getAll(req, res)
});
courseRouter.delete("/:id", (req, res)=>{
    courseController.deleteCourse(req, res)
})


export default courseRouter