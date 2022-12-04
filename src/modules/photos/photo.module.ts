import { Module } from '@nestjs/common';
import { Photo } from './entity/photo.entity';
// import { DatabaseModule } from '../databases/database.module';
// import { photoProvider } from './photo.provider';
import { PhotoService } from './photo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoController } from './photo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  controllers: [PhotoController],
  providers: [PhotoService],
  exports: [PhotoService],
})
export class PhotoModule {}
