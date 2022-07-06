import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Lucas',
      sobrenome: 'Lucio',
      email: 'lluciomeireles',
      idade: 19,
      peso: 47,
      altura: 1.79,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
