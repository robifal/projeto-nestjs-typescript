import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Cat } from './cats/cat.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-ck4ucomi9prc73agmqd0-a.oregon-postgres.render.com',
      port: 5432,
      username: 
'robert_postgre_exemplo_user',
      password: 'a3heILi6YlgAPDQgGLG1n64NfpUBrUov',
      database: 'robert_postgre_exemplo',
      entities: [Cat],         
      synchronize: true,
      ssl: true,
    }), CatsModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}