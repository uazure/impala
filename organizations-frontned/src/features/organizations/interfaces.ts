export interface Organization {
  name: string;
  state: string;
  city: string;
  country_code: string;
}

export interface OrganizationsResult {
  result: Organization[],
  total: number,
}
