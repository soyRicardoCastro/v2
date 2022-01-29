import IconExternal from './external.jsx'
import IconFolder from './folder.jsx'
import IconGitHub from './github.jsx'
import IconInstagram from './instagram.jsx'
import IconLinkedin from './linkedin.jsx'
import IconLoader from './loader.jsx'
import IconLogo from './logo.jsx'
import IconTwitter from './twitter.jsx'

const Icon = ({ name }) => {
  switch (name) {
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
