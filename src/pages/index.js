import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import image from "../images/me.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Me!"
          className="block mx-auto mb-8 max-w-xs"
          src={image}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-gray-200">
          Hey! I&apos;m Prajit, welcome.
        </h2>

        <p className="leading-loose">
          I&apos;m a 22 year old Computer Science student in my final year at Curtin University. I enjoy making websites, photography, video editing and gaming.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
