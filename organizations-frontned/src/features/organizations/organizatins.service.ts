import { OrganizationsResult } from './interfaces';

export function fetchOrganizations(searchName: string, offset: number, limit: number): Promise<OrganizationsResult> {
  const baseUrl = 'http://localhost:3001';
  const path = 'organizations'

  const urlParams = new URLSearchParams();

  urlParams.set('offset', `${offset}`);
  urlParams.set('limit', `${limit}`);

  const request = new Request(`${baseUrl}/${path}/${searchName}?${urlParams.toString()}`)
  
  return fetch(request).then(response => response.json() );
}
