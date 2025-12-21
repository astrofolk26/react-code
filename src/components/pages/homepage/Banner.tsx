"use client";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="bg-[var(--primary)] padding relative " style={{ paddingBottom: '12px' }} >
               
                   <section className="flex items-center justify-center" style={{ marginTop: '-40px' }}>
                     
        <Image
                  src="/assets/images/security/remediesspecialist.jpg"
          alt="AstroFolk"
          width={1250}
          height={550}
          className=""
        />
      </section>
     
    </section>
  );
};

export default Banner;

