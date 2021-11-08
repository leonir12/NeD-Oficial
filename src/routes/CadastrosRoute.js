const { Router } = require('express');
const router = Router();


router.get('/cadastros', CadastrosController.pegaTodosOsCadastros);



module.exports = router;