const database = require('../dao/models');

class UsuariosController {
    static async pegaTodosOsUsuarios(req, res) {
        try {
            const todosOsUsuarios = await database.Usuarios.findAll();
            return res.status(200).json(todosOsUsuarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async pegaUmUsuario(req, res) {
        const { id } = req.params;
        try{
            const umUsuario = await database.Usuarios.findOne( { 
                where: { 
                    id: Number(id) 
                } 
            });
            return res.status(200).json(umUsuario);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaUsuario(req, res) {
        const novoUsuario = req.body;
        try{
            const novoUsuarioCriado = await database.Usuarios.create(novoUsuario);
            return res.status(200).json(novoUsuarioCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async atualizaUsuario(req, res) {
        const novasInfosUsuario = req.body;
        const { id } = req.params;
        try{
            await database.Usuarios.update(novasInfosUsuario, { where: { id: Number(id) } });
            const usuarioAtualizado = await database.Usuarios.findOne( { where: { id: Number(id) } });
            return res.status(200).json(usuarioAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagarUsuario(req, res) {
        const { id } = req.params;
        try{
            await database.Usuarios.destroy({ where: { id: Number(id) } });
            return res.status(200).json( { mensagem: `id ${id} deletado`} );
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }  


}

module.exports = UsuariosController