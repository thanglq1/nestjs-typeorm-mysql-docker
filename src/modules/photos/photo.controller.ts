import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePhotoDto } from './dto/photo.dto';
import { Photo } from './entity/photo.entity';
import { PhotoService } from './photo.service';

@Controller('photos')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Post()
  create(@Body() createPhoto: CreatePhotoDto) {
    return this.photoService.create(createPhoto);
  }
}
