import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import SectionHeader from '../SectionHeader/SectionHeader';

interface Props {
  personalInformation: CMSPersonalInformation<unknown>;
  pdf?: boolean;
}

const HobbiesAndInterests = (props: Props): JSX.Element => {
  const { personalInformation, pdf = false } = props;
  const CMS = getCMSIntegration();

  return (
    <article>
      <SectionHeader pdf={pdf} icon={faDiceD20} text="Related Personal Works" />
      <CMS.RichTextComponent
        richText={personalInformation.hobbies_and_interests}
      />
    </article>
  );
};

export default HobbiesAndInterests;
