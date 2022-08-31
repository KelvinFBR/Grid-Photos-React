import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__owner">
        Created by
        <span className="footer__name">
          <a
            target="_blank"
            href="https://kelvin-f-baez-rodriguez-frontend-dev.netlify.app/"
          >
            Kelvin F. Baez Rodriguez
          </a>
        </span>
      </p>

      <div className="footer__social-media">
        <a target="_blank" href="https://github.com/KelvinFBR">
          <FaGithub className="footer__social-item" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/kelvin-f-baez-rodriguez-frontend-developer-student/"
        >
          <FaLinkedin className="footer__social-item" />
        </a>
      </div>
    </footer>
  );
};
