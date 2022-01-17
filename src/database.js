import { connect } from 'mongoose'

( async () => {
    try {
        const db = await connect(process.env.MONGODB_URI)
        console.log('Conexion generada con la db: ', db.connection.name)
    } catch (e) {
        console.log('errorsaso:', e)
    }
})();
