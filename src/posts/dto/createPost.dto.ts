import { IsString, IsNotEmpty, Min, Max } from 'class-validator';

export class CreatePostDto {
  @IsString({ each: true })
  @IsNotEmpty()
  paragraphs: string[];

  @IsString()
  @IsNotEmpty()
  title: string;
}

export default CreatePostDto;
