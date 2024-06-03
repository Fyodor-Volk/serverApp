import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    controllers:[],
    providers:[],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 3306,
            username: 'posgres',
            password: 'root',
            database: 'nest-cors',
            models: [],
            autoLoadModels:true
          }),
    ],
    }
)
export class AppModule{

}