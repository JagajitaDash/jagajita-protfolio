import React from "react";
import me from "../assets/logo-banner-jd.png";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>JAGAJITA DASH</h2>
        <p>Frontend Developer</p>
        <p>Punctual,Dedicated,Strong willpower to learn new technology</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          
          
          <a href="https://www.linkedin.com/in/jagajita-dash-8942061a4/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/JagajitaDash" target={"blank"}>
            <AiFillGithub />
          </a>

        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
