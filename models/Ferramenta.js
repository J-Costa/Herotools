const mongoose = require('mongoose');
const Usuario = require('./Usuario');


const FerramentaSchema = mongoose.Schema({ 
   ferramenta: { //endereço da imagem como teste
       type: String,
       required: true
   },
   tipo: {
        type: String,
    required: true
    },
   modelo: {
       type: String,
       require: true
    },
    preco: {
        type: Number
    },
    proprietario: {
        type: mongoose.Types.ObjectId,
        ref: "Usuario",
        require: true
    },
    unidade: {
        type: Number,
        require: true,
        min: 1,
        default: 1
    }
});

const Ferramenta = module.exports = mongoose.model('Ferramenta', FerramentaSchema);