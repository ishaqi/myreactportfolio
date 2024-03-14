import { useContext } from "react";
import "./Works.css";
import Extramarks from "src/assets/img/extramarks.png";
import Uhc from "src/assets/img/uhc.png";
import Onwheeler from "src/assets/img/onwheeler.png";
import Notabene from "src/assets/img/notabene.jpeg";
import Niit from "src/assets/img/niit.png";
import { ThemeContext } from '../../ThemeContext';
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const { theme }  = useContext(ThemeContext);
  const darkMode = theme === 'dark';

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          I possess experience working on various web application projects using ReactJS and Node.js. <br/>
          <span>My journey began with NIIT Ltd., where I honed my skills in these technologies.</span> <br/>
          Subsequently, I had the opportunity to contribute to projects at NotABene, Extramarks,
           and UnitedHealthcare, each enriching my understanding of web development and problem-solving abilities.
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Extramarks} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Uhc} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Onwheeler} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Notabene} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Niit} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
