import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { useState } from "react";

const Hero = () => {
  const [img, setImg] = useState(bigShoe1);
  return (
    <section
      className="w-full flex xl:flex-row  flex-col justify-center min-h-screen gap-10 max-container"
      id="home"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer colection
        </p>
        <h1 className="mt-10 font-palaquin text-8xl max-sm:text[72px] max-sm:leading-[82]">
          <span className="xl:bg-white  xl:whitespace-nowrap relative z-10 pr-10">
            the new arrivel
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">nike </span> shoes
        </h1>
        <p className="font-montserrat text-slate-gray mt-6 mb-14 leading-8 sm:max-w-sm  ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni dolore
        </p>
        <Button label="show now" iconUrl={arrowRight} />
        <div className="flex justify-start  items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1  justify-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center">
        <img
          src={img}
          alt="shoe"
          className="object-contain relative z-10"
          width={610}
          height={500}
        />
        <div className="flex sm:gap-6 gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgUrl={shoe}
                changeImage={(img) => setImg(img)}
                bigImage={img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
