import React from 'react';
import { useAppSelector } from './../../app/hooks';
import { OrganizationListItem } from './organization-list-item';
import { organizationsSelector } from './selectors';

export function OrganizationsList() {
  const organizations = useAppSelector(organizationsSelector);

  return (
    <div>
      {organizations.map((organization) => <OrganizationListItem key={organization.name} organization={organization} />)}
    </div>
  );
}
