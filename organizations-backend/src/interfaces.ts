export interface Organization {
  name: string,
  state: string,
  city: string,
  country_code: string,
}

export interface OrganizationsPaginatedResponse {
  result: Organization[],
  total: number,
}
