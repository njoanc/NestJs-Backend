import { IsString, IsNotEmpty, Min, Max } from 'class-validator';

export class CreatePost {
  @IsString({ each: true })
  @IsNotEmpty()
  paragraphs: string[];

  @IsString()
  @IsNotEmpty()
  title: string;
}

export default CreatePost;
