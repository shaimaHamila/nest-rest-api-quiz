import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'quiz',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    autoLoadEntities: true,
    synchronize: true,
}