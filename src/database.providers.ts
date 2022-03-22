/* eslint-disable prettier/prettier */
import { Sequelize } from 'sequelize-typescript';
import { User } from './user/entity/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5425,
        username: 'postgres',
        password: 'postgres',
        database: 'pizzastore',
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
