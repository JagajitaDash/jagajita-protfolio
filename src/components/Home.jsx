
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import me from "../assets/logo-banner-jd.png";

const Home = () => {
  // const clientCount = useRef(null);
  // const projectCount = useRef(null);

  // const animationClientsCount = () => {
  //   animate(0, 100, {
  //     duration: 1,
  //     onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
  //   });
  // };
  // const animationProjectsCount = () => {
  //   animate(0, 500, {
  //     duration: 1,
  //     onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
  //   });
  // };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> JAGAJITA DASH
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Meta certified Frontend Developer", "A Designer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:rishnadash123@gmail.com">Contact Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          {/* <article>
            <p>
              +
              {ratio < 2 && (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +
                {ratio < 2 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    500
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article> */}
            {/* <aside>
            <article data-special>
              <p>Contact</p>
              <span>JAGAJITA DASH</span>
              <span>phn no - 8178874124</span>
            </article>
          </aside> */}
        </div>
      </section>
      <section>
        <img src={me} alt="Jagajita" />
      </section>
      
    </div>
  );
};

export default Home;
