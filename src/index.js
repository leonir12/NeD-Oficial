const express = require("express")
const app = express()
import path from 'path'

/**
* Colocar servidor no ar
*/
const PORTA = process.env.PORT || 8080;
app.listen(PORTA, function () {
    console.log(`Servidor rodando na porta ${PORTA}`)
})



app.use('/publico', express.static(__dirname + '/src/publico'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));



 /*app.get('/album', (req, res) => res.sendFile(path.join(__dirname,'src/views/form-album-digital.html')));*/

/**
 * Rotas
 */
 const routes = require('./routes');
 routes(app);
 
 