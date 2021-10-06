import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { getCMSIntegration } from '../../../cms';
import ResumePageWeb from '../../index';

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
  const links = await CMS.getLinks();

  return {
    props: {
      educationalExperiences,
      links,
      personalInformation,
      privateInformation,
      professionalExperiences,
      skills,
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const ResumePageWebSecret = (props: Props): JSX.Element => {
  const { query } = useRouter();
  const secret = query.secret as string;

  // @ts-ignore
  return <ResumePageWeb {...{ ...props, secret }} />;
};

export default ResumePageWebSecret;
