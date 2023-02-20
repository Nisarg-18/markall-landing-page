import React from "react";

const Customers = () => {
  return (
    <div className="p-10 customers">
      <div>
        <p className="font-semibold">OUR HAPPY CUSTOMERS</p>
        <h1 className="font-bold text-lg md:text-4xl md:leading-[50px] mb-3">
          What our customers <br />
          say about us
        </h1>
        <div className="bg-black h-[0.1px] w-1/3 mb-10"></div>
      </div>
      <div className="flex flex-row justify-between">
        <div></div>
        <div className="w-1/2 font-semibold">
          <span className="text-gray-400 text-8xl ml-[-50px]">&ldquo;</span>
          <p className="mt-[-55px] text-lg md:text-4xl text-gray-600 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eos
            totam et ab esse sit consequatur beatae explicabo enim omnis!
          </p>
          <h1 className="mb-2 text-2xl font-extrabold">Jane Doe</h1>
          <p className="text-gray-600">Product Specialist, Lorem Co.</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
