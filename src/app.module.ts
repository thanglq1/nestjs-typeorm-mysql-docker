import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { DatabaseModule } from './modules/databases/database.module';
import { PhotoModule } from './modules/photos/photo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQLDB_HOST,
      port: +process.env.MYSQLDB_DOCKER_PORT,
      username: process.env.MYSQLDB_USER,
      password: process.env.MYSQLDB_ROOT_PASSWORD,
      database: process.env.MYSQLDB_DATABASE,
      entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
      // Don't use synchronize for prod otherwise will lost data
      synchronize: true,
    }),
    PhotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
