import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import { getCMSIntegration } from '../../../cms';
import ResumePagePDF from '../../pdf';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    params: { secret },
    res,
  } = ctx;
  const privateKey = process.env.PRIVATE_KEY;
  if (secret !== privateKey) {
    res.writeHead(401);
    res.end('Not authorized');
    return { props: {} };
  }

  const CMS = getCMSIntegration();
  const personalInformation = await CMS.getPersonalInformation();
  const professionalExperiences = await CMS.getProfessionalExperiences();
  const privateInformation = await CMS.getPrivateInformation();
  const educationalExperiences = await CMS.getEducationalExperiences();
  const skills = await CMS.getSkills();

  return {
    props: {
      educationalExperiences,
      personalInformation,
      privateInformation,
      professionalExperiences,
      skills,
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const ResumePageSecret = (props: Props): JSX.Element => {
  // @ts-ignore
  return <ResumePagePDF {...props} />;
};

export default ResumePageSecret;
