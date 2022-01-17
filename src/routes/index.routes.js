import { Router } from 'express'
import { renderTasks, createTask, about, about2, updateTask, deleteTask, addTask, toggleTask } from '../controllers/tasks.controller'


const router = Router();

router.get('/', renderTasks)

router.get('/editar/:id', createTask)

router.get('/about', about)

router.get('/about2', about2)

router.post('/editar/:id', updateTask)

router.get('/delete/:id', deleteTask)

router.post('/tasks/add', addTask)

router.get('/toggleDone/:id', toggleTask)

export default router;
