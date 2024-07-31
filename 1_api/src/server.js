const app = require('./app')
const port = 5000 //Se configuró para Docker

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})
