import "./Footer.css";
import Wave from "/src/assets/img/wave.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>saiyed.compark@gmail.com</span>
        <div className="f-icons">
          <FaInstagram color="white" size={"3rem"} />
          <FaFacebook color="white" size={"3rem"} />
          <FaGithub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
