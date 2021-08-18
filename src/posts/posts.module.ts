import { Module } from '@nestjs/common';
import PostsController from './posts.controller';
import PostsService from './posts.service';

@Module({})
export class PostsModule {
  imports: [];
  controllers: [PostsController];
  providers: [PostsService];
}
