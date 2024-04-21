import { CgMail } from 'react-icons/cg';
import { BsTelephone } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-[#e5ebed] dark:bg-gray-900 mb-10 rounded">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-[#0FB3BB] mb-4 ">Sky Cast</h1>
            <p className="text-black items-center w-[300px] ">
              Funding freemium long tail hypotheses first mover advantage assets
              ownership
            </p>
            <p className="items-center flex flex-row text-black">
              {' '}
              <span>
                <CgMail className="mr-2 text-[#0FB3BB]" />
              </span>{' '}
              SkyCast@mail.com
            </p>
            <p className="items-center flex flex-row text-black">
              {' '}
              <span>
                <BsTelephone className="mr-2 text-[#0FB3BB]" />
              </span>{' '}
              + 12 3456 7890
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Services
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-">
                <li className="mb-4">Web Hosting</li>
                <li>Domains</li>
                <li>Premium Hosting</li>
                <li>Private Server</li>
                <li>E-mail Hosting</li>
                <li>Web Hosting</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Support
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">Pricing Plan</li>
                <li>Guide</li>
                <li>Documentation</li>
                <li>Tutorial</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">About</li>
                <li>Blog</li>
                <li>Join Us</li>
                <li>Press</li>
                <li>Partners</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">Claim</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
