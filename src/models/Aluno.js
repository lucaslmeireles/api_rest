import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: ' Nome precisa ter entre 3 e 255 caracteres',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: ' Nome precisa ter entre 3 e 255 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email already exist',
          },
          validate: {
            isEmail: {
              msg: 'Email invalido',
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          validate: {
            isInt: {
              msg: 'Idade precisa ser um inteiro',
            },
          },
        },
        altura: {
          type: Sequelize.INTEGER,
          validate: {
            isFloat: {
              msg: 'Altura precisa ser um float',
            },
          },
        },
        peso: {
          type: Sequelize.INTEGER,
          validate: {
            isFloat: {
              msg: 'Peso precisa ser um float',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'aluno_id' });
  }
}
