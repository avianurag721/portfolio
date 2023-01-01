import React from "react";
import "./social.css";
import github from "./github.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";
import whatsapp from "./whatsapp.png";
import phone from "./phone.png";
import home from "./home.png";
import mail from "./mail.png";

const Social = () => {
  return (
    <div className="social">
      <div >
        <h2>Social Links</h2>
        <div className="socialMedia" name="socialmedia">
          <a className="whatsapp" href="https://wa.me/+919140931309">
            <img src={whatsapp} alt="" />
            <span>Whatsapp</span>
          </a>

          <a
            className="linkedin"
            href="https://www.linkedin.com/in/anurag-yadav-896910238/"
          >
            <img src={linkedin} alt="" />
            <span>Linkedin</span>
          </a>

          <a
            className="github"
            href="https://github.com/avianurag721?tab=repositories"
          >
            <img src={github} alt="" />
            <span>Github</span>
          </a>

          <a
            className="instagram"
            href="https://instagram.com/_anurag.721?igshid=ZDdkNTZiNTM="
          >
            <img src={instagram} alt="" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="contact">
        <div className="contactInfo">
          <h2>Contact Info</h2>
          <div className="mail">
            <img src={mail} alt="" />
            avianurag.721@gmail.com
          </div>
          <div className="add">
            <img src={home} alt="" />
            Integral University,Dasauli, Kursi Road,Lucknow <br />
            226026,Uttar Pradesh
          </div>
          <div className="phone">
            <img src={phone} alt="" />
            9140931309
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
