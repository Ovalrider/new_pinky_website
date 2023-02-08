import Router from "express";
import Client from './model/Client.js'
import ClientController from "./ClientController.js";

const router = new Router()

router.set('view engine' , 'ejs')

router.post('/add_course',ClientController.create)
router.get('/clients',ClientController.getAll)
router.get('/edit/:id', ClientController.getOne)
router.post('/edit/:id', ClientController.update)
router.get('/delete/:id',ClientController.delete)



export default router;