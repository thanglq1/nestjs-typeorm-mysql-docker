import { IsBoolean, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreatePhotoDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  filename: string;

  @IsNumber()
  views: number;

  @IsBoolean()
  isPublished: boolean;
}
