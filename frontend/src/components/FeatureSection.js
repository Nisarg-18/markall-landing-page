const FeatureSection = () => {
  return (
    <div className="mt-10 px-10">
      <div>
        <p className="font-semibold">OUR FEATURES</p>
        <h1 className="font-bold text-lg md:text-4xl md:leading-[50px] mb-3">
          Know your audience <br />
          and boost sales
        </h1>
        <div className="bg-black h-[0.1px] w-1/3 mb-10"></div>
      </div>
      <div className="flex flex-row justify-between">
        <div></div>
        <div className="w-1/2 font-semibold">
          <p>
            Effective emails convey the most significant substance to a client
            at the proper time which is our marketing approaches include
            scheduled emails.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
