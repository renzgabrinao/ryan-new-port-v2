import Hero from "@/components/Hero";
import { client } from "@/utils/client";
import urlFor from "@/utils/imageBuilder";
import { siteSettingsQuery } from "@/utils/queries";
import Head from "next/head";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { customEase3 } from "@/utils/eases";

export default function Home({ settings }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <m.main
        className="top-0 left-0 w-full h-screen overflow-hidden select-none bg-primary"
        exit={{ x: "-100%", position: "absolute", zIndex: 5 }}
        transition={{ duration: 0.9, ease: customEase3 }}
      >
        <section className="w-full">
          <div className="absolute top-14 md:top-[unset] md:bottom-12 md:left-4 md:w-fit text-center md:text-left z-10 leading-[1] text-rg-white uppercase w-full">
            <h1
              className="font-extrabold tracking-tight font-neuehaas text-step_3 md:text-step_1"
              id="title"
            >
              {settings.title}
            </h1>
            <h2 className="text-step2 tracking-[-0.02em] font-satoshi font-light capitalize">
              <span className="font-melodrama">Creatives</span> Developer
            </h2>
          </div>
          <div className="absolute w-full overflow-hidden -translate-x-1/2 -translate-y-1/2 md:w-3/5 lg:w-[40%] aspect-square top-1/2 left-1/2 blur-xl">
            <Image
              src={"/../public/images/heroGif.gif"}
              fill
              alt="photo"
              draggable={false}
            />
          </div>
          <div className="absolute z-50 -translate-x-1/2 -translate-y-1/2 h-1/5 aspect-square top-1/2 left-1/2 opacity-80 blur-0">
            <Image
              src={urlFor(settings.heroImage).url()}
              fill
              alt="photo"
              draggable={false}
            />
          </div>
        </section>
      </m.main>
    </>
  );
}

export async function getStaticProps() {
  const settings = await client.fetch(siteSettingsQuery());

  return {
    props: {
      settings,
    },
  };
}
