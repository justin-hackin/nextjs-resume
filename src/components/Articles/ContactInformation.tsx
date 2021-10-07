import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import SectionHeader from '../SectionHeader/SectionHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CMSPrivateInformation } from '../../_types/CMSPrivateInformation';

interface Props {
  personalInformation: CMSPersonalInformation<unknown>;
  privateInformation?: CMSPrivateInformation<unknown>[];
  pdf?: boolean;
}

const ContactInformation = (props: Props): JSX.Element => {
  const { personalInformation, privateInformation, pdf = false } = props;
  const CMS = getCMSIntegration();
  const iconNudgeStyle = { top: '0.4em' };
  return (
    <article>
      <SectionHeader pdf={pdf} icon={faIdCard} text="Contact Information" />
      <ul className="list-unstyled fa-ul">
        <li>
          <FontAwesomeIcon
            aria-hidden
            listItem
            style={iconNudgeStyle}
            icon="map-marker-alt"
          />
          <div className="row mt-md-0 mt-xxxs">
            <div className="col-lg-2 col-sm-3">
              <strong>Location:</strong>
            </div>
            <div className="col">{personalInformation.location}</div>
          </div>
        </li>
        {privateInformation &&
          privateInformation.map((privateField) => (
            <li key={privateField.label}>
              {privateField.icon_name && (
                <FontAwesomeIcon
                  aria-hidden
                  listItem
                  style={iconNudgeStyle}
                  icon={privateField.icon_name}
                />
              )}
              <div className="row mt-md-0 mt-xxxs no-paragraph-margins">
                <div className="col-lg-2 col-sm-3">
                  <strong>{privateField.label}:</strong>
                </div>
                <div className="col">
                  <CMS.RichTextComponent richText={privateField.content} />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </article>
  );
};

export default ContactInformation;
