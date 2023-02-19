import hero from "../assets/hero.PNG";
const HeroSection = () => {
  return (
    <div className="flex flex-row justify-between bg-black text-white px-10 py-20 pb-40 hero items-center">
      <div>
        <h1 className="text-5xl font-extrabold mb-10">
          Reach your - <br />
          audience & convert your leads
        </h1>
        <p className="mb-6">
          Get your customers with SEO, rank your business with <br /> email
          marketing, build sales leads
        </p>
        <div>
          <button className="get-btn text-black font-bold px-3 py-1 rounded-md mr-5">
            Get Started
          </button>
          <button className="bg-black text-white font-bold px-3 py-1 rounded-md border-solid border-white border">
            Watch Demo
          </button>
        </div>
      </div>
      <div>
        <img className="w-[500px]" src={hero} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
