const { Router } = require('express');
const UsuariosController = require('../controllers/UsuariosController');


//Iniciando o Router do express
const router = Router();

router.get('/usuarios', UsuariosController.pegaTodosOsUsuarios);
router.get('/usuarios/:id', UsuariosController.pegaUmUsuario);
router.post('/usuarios', UsuariosController.criaUsuario);
router.put('/usuarios/:id', UsuariosController.atualizaUsuario);
router.delete('/usuarios/:id', UsuariosController.apagarUsuario);



module.exports = router;