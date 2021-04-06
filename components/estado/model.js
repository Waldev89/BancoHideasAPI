const mongoose = require('mongoose')


//Schema de Estados
const estadoSchema = new mongoose.Schema({
  descripcion: { type: String, required: true }
})

const Estado = mongoose.model('estados', estadoSchema)


module.exports = Estado
