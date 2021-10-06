import { IconName } from '@fortawesome/free-solid-svg-icons';

interface CMSLink {
  href: { link_type: string; url: string };
  icon_name: IconName;
  id: string;
  title: string;
}
