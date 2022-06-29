import { AiFillGithub, AiFillLinkedin, AiFillInstagram,  } from "react-icons/ai";
import { MdEmail, MdLocationOn } from "react-icons/md";

import "./style.scss";

export function CardSocialNetwork() {
  return (
    <div className="box-social-network">
      <div className="social-network">
        <MdLocationOn size={25} />
        <p>Sete barras sp, Brazil</p>
      </div>
      <div className="social-network">
        <AiFillGithub size={25} />
        <a href="https://github.com/rafaelmasselli">
          <p>Rafael masselli</p>
        </a>
      </div>
      <div className="social-network">
        <AiFillLinkedin size={25} />
        <a href="https://www.linkedin.com/in/rafael-masselli-740921214/">
          <p>Rafael masselli</p>
        </a>
      </div>
      <div className="social-network">
        <MdEmail size={25} />
        <p>rafaelmasselli0@gmail.com</p>
      </div>
      <div className="social-network">
        <AiFillInstagram size={25} />
        <a href="https://www.instagram.com/massellirafael/">
          <p>@masssellirafael</p>
        </a>
      </div>
    </div>
  );
}
