import express, {urlencoded} from 'express'
import index from './routes/index.routes'
import { engine } from 'express-handlebars'
import path from 'path'
import morgan from 'morgan'

const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "views"));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use(index)

// static files
app.use(express.static(path.join(__dirname, "public")))

module.exports = app
