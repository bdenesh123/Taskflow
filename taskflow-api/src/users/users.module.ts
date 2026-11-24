import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtAuthModule } from '../auth/jwt-auth/jwt-auth.module';

@Module({
  imports: [DatabaseModule, JwtAuthModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
