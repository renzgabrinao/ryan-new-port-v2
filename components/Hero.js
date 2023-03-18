import React from "react";

const Hero = () => {
  return (
    <section
      className="h-screen min-h-[500px] mb-[20vmax] overflow-hidden z-10"
      id="hero-container"
      ref={component}
    >
      <div className="relative h-full pt-[5rem]" id="hero-container">
        {/* <HeroImage
          src={urlFor(heroImage).url()}
          containerCn="relative xl:absolute xl:top-0 w-[45%] lg:w-[30%] md:aspect-[1/1] aspect-[3/4] overflow-hidden hero-image-container"
        />
        <HeroImage
          src={urlFor(heroImage2).url()}
          containerCn="absolute xl:bottom-0 xl:aspect-square bottom-[5%] right-0 w-[40%] lg:w-[30%] aspect-[3/5] md:aspect-[2/3] overflow-hidden hero-image-container"
        />
        <HeroTitle title={title} subTitle={subTitle} />
        <CurrentlyWatching isLoading={isLoading} data={currentlyWatching} />
        <CurrentlyListening isLoading={isLoading} data={currentlyListening} /> */}
      </div>
    </section>
  );
};

export default Hero;
