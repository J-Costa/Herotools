const mongoose = require('mongoose');
const Usuario = require('./Usuario');
const Ferramenta = require('./Ferramenta');


const PedidoSchema = mongoose.Schema({ 
  usuario: {type: mongoose.Types.ObjectId, ref: 'Usuario'},
  usuario: {type: mongoose.Types.ObjectId, ref: 'Ferramenta'},
  carrinho: {type: Object, required: true},
  dataRetirada: {type: Date, required: true},
  dataDevolucao: {type: Date, required: true},
  devolvidoEm: {type: Date, default: undefined },
  dataPedido: {type: Date, default: Date.now()}
});

const Fatura = module.exports = mongoose.model('Fatura', FaturaSchema);