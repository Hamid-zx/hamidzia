import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/HZlogo1.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="Logo" className="mx-8" width={50} height={33} />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/hamid-zia-656204276/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        ><FaLinkedin/></a>
        <a
          href="https://github.com/Hamid-zx"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        ><FaGithub/></a>
        <a
          href="https://www.instagram.com/hamidzia_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        ><FaInstagram/></a>
        <a
          href="https://www.facebook.com/hamidzia492"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook"
        ><FaFacebook/></a>
      </div>
    </div>
  );
};

export default Navbar;
