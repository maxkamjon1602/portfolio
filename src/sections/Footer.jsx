import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a
                href={`${socialImg.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link">
                <img src={socialImg.imgPath} alt="social icon" />

              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Max Abdumannobov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
