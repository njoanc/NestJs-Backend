import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthenticationService } from './authentication/authentication.service';
@Module({
  imports: [PostsModule, UsersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, AuthenticationService],
})
export class AppModule {}
