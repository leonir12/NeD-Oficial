const cadastros = require('./CadastrosRoute');
const usuarios = require('./UsuariosRoute');

module.exports = app => {
    app.use(cadastros),
    app.use(usuarios);
}