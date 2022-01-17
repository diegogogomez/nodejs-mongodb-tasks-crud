import './config'
import app from './app'
import './database'

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado escuchando el puerto ${ process.env.PORT }`)
})


