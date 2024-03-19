import  { FormEvent, useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from '../../ThemeContext';
const Contact = () => {
  const { theme }  = useContext(ThemeContext);
  const darkMode = theme === 'dark'
  const form = useRef<HTMLFormElement>(null);
  const [done,setDone] = useState(false)
  const sendEmail = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(import.meta.env)
    const data = form.current || ''
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        data,
        'c3ar7sUFQPY1dcewD'
      )
      .then(
        (result) => {
          console.log("sdssd",result,result.text);
          setDone(true);
          setTimeout(()=>{
            setDone(false)
          },2000)
          if(form.current)
          form.current.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
