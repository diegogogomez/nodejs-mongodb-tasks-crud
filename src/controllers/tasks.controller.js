import Task from "../models/Task";

const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean()
    res.render('home', { tasks: tasks })
}

const createTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean()
        res.render('edit', { task: task })
    } catch (e) {
        console.log(e.message)
        res.render('/')
    }
}

const about = (req, res) => {
    res.render('about')
}

const about2 = (req, res) => {
    res.send('<h1>hola desde about</h1>')
}

const updateTask = async (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/')
}

const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

const addTask = async (req, res) => {
    const task = Task(req.body)
    try {
        const {_id}  = await task.save( )
    } catch (e) {
        return res.send('<h1>El guardado fallo por error duplicado</h1>')
    }
    res.redirect('/')
}

const toggleTask = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    console.log(task.done)
    await task.save();
    res.redirect("/");
}


module.exports = {
    renderTasks,
    createTask,
    about,
    about2,
    updateTask,
    deleteTask,
    addTask,
    toggleTask
}
