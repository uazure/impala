import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import { resolve } from 'path';
import { Organization, OrganizationsPaginatedResponse } from './interfaces';
import csv = require('csv-parser');

@Injectable()
export class OrganizationsService {
  private organizations: Organization[] = [];
  constructor() {
    const fileName = resolve(__dirname, 'assets', 'orgs_sample.csv');
    createReadStream(fileName)
      .pipe(csv({ separator: ';'}))
      .on('data', (data) => this.organizations.push(data))
      .on('end', () => {
        console.log(`Loaded organizations list, ${this.organizations.length}`);
      });
  }

  getOrganizations(searchName: string, offset: number, limit: number): OrganizationsPaginatedResponse {
    const regExp = new RegExp(searchName, 'i');
    
    const filtered = this.organizations.filter((org) => {
      return org.name.search(regExp) > -1;
    });

    return {
      result: filtered.slice(offset, offset + limit),
      total: filtered.length,
    }
  }
}
