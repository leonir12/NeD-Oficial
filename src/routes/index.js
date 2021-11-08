const cadastros = require('./CadastrosRoute');

module.exports = app => {
    app.use(cadastros);
}