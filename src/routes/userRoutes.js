import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Nao deveria existir
// router.get('/', userController.index);
// router.get('/:id', loginRequired, userController.show);

router.post('/', userController.store);// Cria um usuario
router.put('/', loginRequired, userController.update); // Usuario so pode editar os SEUS dados
router.delete('/', loginRequired, userController.delete); // Usuario so pode deletar o SEE login

export default router;

/*
index -> lista usuario -> GET
store/create -> cria usuarios -> POST
delete -> apaga usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH PUT
*/
