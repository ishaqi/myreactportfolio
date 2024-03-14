import  { useContext } from "react";
import "./Intro.css";
import Vector1 from "src/assets/img/Vector1.png";
import Vector2 from "src/assets/img/Vector2.png";
import boy from "src/assets/img/boy.png";
import glassesimoji from "src/assets/img/glassesimoji.png";
import thumbup from "src/assets/img/thumbup.png";
import crown from "src/assets/img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "src/assets/img/github.png";
import LinkedIn from "src/assets/img/linkedin.png";
import Instagram from "src/assets/img/instagram.png";
import { ThemeContext } from '../../ThemeContext';
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const { theme }  = useContext(ThemeContext);
  const darkMode = theme === 'dark';

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Ishaq Hashmi</span>
          <span>
            Fullstack Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img onClick={()=>{
            window.open('https://www.linkedin.com/in/ishaq-hashmi-161a79aa','_blank')
          }} src={LinkedIn} alt="" />
          <img onClick={()=>{
            window.open('https://www.instagram.com/ishaq__hashmi/','_blank')
          }} src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" width={200} height={380}/>
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Frontend" text2="developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Backend" text2="developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
