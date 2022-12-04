import { Photo } from './entity/photo.entity';
import { Repository } from 'typeorm';
import { CreatePhotoDto } from './dto/photo.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  async create(createPhoto: CreatePhotoDto) {
    return this.photoRepository.save(createPhoto);
  }
}
