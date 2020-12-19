import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";


function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <p className="leading-loose mb-10">
            I have a strong passion for website development and programming. Throughout my journey at university, I have understood the power of software and technology, and how it can benefit everyone who uses it.
          </p>
          <p className="leading-loose mb-10">
            Alongside programming, I enjoy video editing and photography. Video editing is a skill which I have spent most of my spare time learning, with programs such as Adobe After Effects and Premiere Pro.
          </p>
          <p className="leading-loose">
            I also play video games and enjoy going out for long drives. These activities help me stay calm, and allow me to refocus onto the task afterwards. At the end of the day, there&apos;s nothing better than driving down a long road with a sunset view.
          </p>
        </div>


      </section>
    </Layout>
  );
}

export default AboutPage;
