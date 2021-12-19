import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { AppController } from './app.controller';
import { OrganizationsService } from './organizations.service';

@Module({
  imports: [],
  controllers: [AppController, ApiController],
  providers: [OrganizationsService],
})
export class AppModule {}
