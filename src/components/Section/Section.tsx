import classnames from 'classnames';
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  color?: 'light' | 'primary' | 'white' | 'dark' | 'darker';
  pdf?: boolean;
}

const Section = (props: Props): JSX.Element => {
  const { children, color, pdf = false } = props;

  return (
    <section
      className={classnames({
        'bg-dark': color === 'dark',
        'bg-darker': color === 'darker',
        'bg-light': color === 'light',
        'bg-primary': color === 'primary',
        'py-sm': !pdf,
        'py-xs': pdf,
        'text-light': !pdf,
        'text-white': color === 'primary',
      })}
    >
      <div className={pdf ? 'container-fluid' : 'container'}>{children}</div>
    </section>
  );
};

export default Section;
