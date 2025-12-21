import About from "@/components/pages/homepage/About";
import Banner from "@/components/pages/homepage/Banner";
// import Eligibility from "@/components/pages/homepage/Eligibility";
// import Faq from "@/components/pages/homepage/Faq";
import Offer from "@/components/pages/homepage/Offer";
import Security from "@/components/pages/homepage/Security";
import Steps from "@/components/pages/homepage/Steps";
import Testimonials from "@/components/pages/homepage/Testimonials";
import React from "react";

export async function generateStaticParams() {
  // You can fetch this from a CMS, database, or just define it here.
  const supportedLangs = ["en-in", "hi"];

  return supportedLangs.map((lang) => ({
    lang: lang,
  }));
}

const page = async ({

}: {
  params: Promise<{ lang: "en-in" | "hi" }>;
}) => {

  return (
    <>
      <main>
        <Banner  />
        <About />
        <Offer />  
        <Steps />
        <Testimonials />
        <Security />
        {/* <Faq />
            <Eligibility /> */}
      </main>
    </>
  );
};

export default page;
