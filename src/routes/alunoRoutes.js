import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.get('/:id', loginRequired, alunoController.show);
router.get('/', alunoController.index);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;
