import { Controller, Get, Param, ParseIntPipe, Query, ValidationPipe } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { Organization, OrganizationsPaginatedResponse } from './interfaces';

@Controller('organizations')
export class ApiController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get(':search')
  // TODO: add validation for search to have at least 3 letters and have only alphanumeric
  // offset and limit should be positive integers
  searchOrganizations(
    @Param('search') searchName: string,
    @Query('offset', ParseIntPipe) offset: number,
    @Query('limit', ParseIntPipe) limit: number): OrganizationsPaginatedResponse {
      console.log(`Got search ${searchName}, 'offset' ${offset}, limit ${limit}`);
      const orgs = this.organizationsService.getOrganizations(searchName, offset, limit);
      return orgs;
  }

}
