import auto from "../assets/automation.PNG";
const Automation = () => {
  return (
    <div className="flex flex-row justify-between automation rounded-lg p-10 mx-10 my-10">
      <div>
        <h1 className="font-extrabold text-3xl mb-5">
          Save precious time <br />
          with automation
        </h1>
        <p className="w-2/3 mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
          explicabo, incidunt id beatae commodi maiores et magni quod quas omnis
          eaque ipsam perspiciatis cupiditate blanditiis sequi culpa. Nulla,
          dolores quod.
        </p>
        <a href="/#" className="font-bold">
          Learn More
        </a>
      </div>
      <div>
        <img src={auto} alt="" className="w-[900px] hidden md:block" />
      </div>
    </div>
  );
};

export default Automation;
