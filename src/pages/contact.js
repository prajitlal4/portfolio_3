import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";


function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            First Name
          </label>

          <input
            className="w-full mb-6 rounded-md border-gray-800"
            name="first-name"
            placeholder="Bill"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="last-name"
          >
            Last Name
          </label>

          <input
            className="w-full mb-6 rounded-md border-gray-800"
            name="last-name"
            placeholder="Murray"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="email"
          >
            Email
          </label>

          <input
            className="w-full mb-6 rounded-md border-gray-800"
            name="email"
            placeholder="bill.murray@email.com"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="w-full mb-6 rounded-md border-gray-800"
            name="message"
            placeholder="Say something..."
            rows="8"
          />

          <button type="submit" className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
