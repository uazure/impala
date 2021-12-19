import { Controller, Get } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';

@Controller()
export class AppController {
  constructor(private readonly appService: OrganizationsService) {}

  @Get()
  getHello(): string {
    return 'Nothing is here'
  }

}
