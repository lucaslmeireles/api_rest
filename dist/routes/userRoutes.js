"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Nao deveria existir
// router.get('/', userController.index);
// router.get('/:id', loginRequired, userController.show);

router.post('/', _UserController2.default.store);// Cria um usuario
router.put('/', _loginRequired2.default, _UserController2.default.update); // Usuario so pode editar os SEUS dados
router.delete('/', _loginRequired2.default, _UserController2.default.delete); // Usuario so pode deletar o SEE login

exports. default = router;

/*
index -> lista usuario -> GET
store/create -> cria usuarios -> POST
delete -> apaga usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH PUT
*/
