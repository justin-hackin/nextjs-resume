import { IconName } from '@fortawesome/free-solid-svg-icons';

interface CMSPrivateInformation<RichTextType> {
  label: string;
  content: RichTextType;
  icon_name: IconName;
}
