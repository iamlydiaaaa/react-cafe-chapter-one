import React from "react";
import "../css/about.css"; // CSS 파일을 import 합니다.

const About = () => {
  return (
    <section className="about-us sub_wrap">
      <div className="container">
        <div>
          <h1>
            Welcome to <br /> CodeOven Studio!
          </h1>
          <img src="./../img/bgimg01.jpeg" alt="" />
          <p>
            At Studio CodeOven, we blend the art of baking with the precision of
            coding to create extraordinary digital experiences. Our name
            embodies the fusion of two worlds: the meticulous craft of baking
            and the innovative process of web development. Just as a perfect
            cake requires careful layering of flavors and ingredients, our
            approach to web development combines various elements with
            creativity and technical expertise to deliver seamless and engaging
            digital solutions.
          </p>
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to transform your vision into a beautifully crafted
            digital presence. We strive to infuse every project with the same
            passion and dedication that goes into baking a perfect cake. From
            initial concept to final deployment, we are committed to delivering
            high-quality web solutions that are not only functional but also
            visually appealing.
          </p>
        </div>
        <div>
          <h2>What We Do</h2>
          <ul>
            <li>
              <strong>Custom Web Development:</strong> Tailoring websites to
              meet your unique needs and goals.
            </li>
            <li>
              <strong>Creative Design:</strong> Designing visually stunning
              interfaces that captivate and engage.
            </li>
            <li>
              <strong>User Experience Optimization:</strong> Ensuring that every
              interaction with your site is smooth and intuitive.
            </li>
            <li>
              <strong>Responsive Solutions:</strong> Creating websites that look
              and perform beautifully on any device.
            </li>
          </ul>
        </div>
        <div>
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Creativity:</strong> We believe in pushing boundaries and
              exploring innovative solutions.
            </li>
            <li>
              <strong>Precision:</strong> Just like in baking, we pay close
              attention to every detail to ensure perfection.
            </li>
            <li>
              <strong>Collaboration:</strong> We work closely with our clients
              to understand their needs and exceed their expectations.
            </li>
            <li>
              <strong>Integrity:</strong> We are committed to delivering honest,
              transparent, and high-quality work.
            </li>
          </ul>
        </div>
        <div>
          <h2>Meet the Team</h2>
          <p>
            Our team is a blend of talented developers, creative designers, and
            meticulous project managers who are passionate about turning ideas
            into reality. With a background in both technology and design, we
            bring a unique perspective to every project we undertake.
          </p>
        </div>
        <div>
          <h2>Why Choose Us?</h2>
          <p>
            Choosing Studio CodeOven means partnering with a team that is
            dedicated to crafting digital experiences with the same care and
            attention to detail as a master baker. Whether you're launching a
            new website or enhancing an existing one, we are here to ensure that
            every layer of your digital presence is perfectly baked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
