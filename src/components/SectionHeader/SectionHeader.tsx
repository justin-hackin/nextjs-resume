import { faCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  icon: IconDefinition;
  text: string;
  pdf?: boolean;
}

const SectionHeader = (props: Props): JSX.Element => {
  const { icon, text, pdf = false } = props;
  const lightVar = 'white';
  const darkVar = 'var(--bs-dark)';
  return (
    <h3>
      <span className="fa-layers fa-fw me-xxxs">
        <FontAwesomeIcon color={pdf ? darkVar : lightVar} icon={faCircle} />
        <FontAwesomeIcon
          color={pdf ? lightVar : darkVar}
          icon={icon}
          transform="shrink-8"
        />
      </span>
      {text}
    </h3>
  );
};

export default SectionHeader;
