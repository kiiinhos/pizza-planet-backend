import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'interplanetary_delivery',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
