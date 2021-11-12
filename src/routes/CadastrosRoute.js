const { Router } = require('express');
const CadastrosController = require('../controllers/CadastrosController')
const router = Router();


router.get('/cadastros', CadastrosController.pegaTodosOsCadastros);
router.get('/cadastros/:id',CadastrosController.pegaUmCadastro);
router.post('/cadastros', CadastrosController.criaCadastro);
router.put('/cadastros/:id', CadastrosController.atualizaCadastro);
router.delete('/cadastros/:id', CadastrosController.apagarCadastro);


module.exports = router;