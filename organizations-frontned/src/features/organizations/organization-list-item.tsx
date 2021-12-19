import { Organization } from './interfaces';
import './organization-list-item.css';

export function OrganizationListItem({organization}: {organization: Organization}) {
  return <div className='OrganizationListItem-root'>
    <div className='OrganizationListItem-icon'><img alt='logo' src='/assets/organizationLogo.png'/></div>
    <div className='OrganizationListItem-content'>
      <div className='OrganizationListItem-name'>
        {organization.name}
      </div>
      <div className='OrganizationListItem-location'>
        <img className="OrganizationListItem-location-marker" alt="location" src="/assets/location-pin.svg" />
        {organization.city}, {organization.state},
        <span className='OrganizationListItem-country'>
          {organization.country_code}
        </span>
      </div>
    </div>
  </div>;
}
