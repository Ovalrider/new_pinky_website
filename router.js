import Router from "express";
import ClientController from "./ClientController.js";
import CourseController from "./CourseController.js";
import CommentController from "./CommentController.js"

const router = new Router()

router.set('view engine' , 'ejs')

router.post('/add_client',ClientController.create)
router.get('/clients',ClientController.getAll)
router.get('/edit_client/:id', ClientController.getOne)
router.post('/edit_client/:id', ClientController.update)
router.get('/delete_client/:id',ClientController.delete)


router.post('/add_course',CourseController.create)
router.get('/courses',CourseController.getAll)
router.get('/edit_course/:id', CourseController.getOne)
router.post('/edit_course/:id', CourseController.update)
router.get('/delete_course/:id',CourseController.delete)


router.post('/add_comment',CommentController.create)
router.get('/comments',CommentController.getAll)
router.get('/edit_comment/:id', CommentController.getOne)
router.post('/edit_comment/:id', CommentController.update)
router.get('/delete_comment/:id',CommentController.delete)
export default router;