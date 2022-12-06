import React from "react";
import testimonial1 from "../assets/sourbhsharma.jpeg";
import testimonial2 from "../assets/ramaprashad.jpeg";
import testimonial3 from "../assets/sanjay.jpeg"

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
        img ={testimonial1}
          name={"Sourabh Sharma"}
          position = {"CEO,Youlogix infotech pvt ltd"}
          feedback={"Jagajita you are really a hardworking girl.Good luck"}
        />
        <TestimonialCard
        img ={testimonial2}
          name={"Ram prashad "}
          position ={"Manager ,kytics technologies"}
          feedback={
            "Wow what a portfolio.you are an extra oridinary talent"
          }
        />
        <TestimonialCard
        img = {testimonial3}
          name={"Sanjay Bisht"}
          position = {"Senior , youlogix infotech pvt ltd"}
          feedback={"you are a quick learner.keep working hard."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({img, name,position, feedback }) => (
  <article>
    <img
      src={img}
      alt="User"
    />
    <h4>{name}</h4>
    <h6>{position}</h6>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
