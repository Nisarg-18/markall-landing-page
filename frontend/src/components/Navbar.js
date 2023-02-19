const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-black text-white px-10 py-5">
      <div className="font-bold text-xl">MARKALL</div>
      <div>
        <a href="/#" className="mr-5">
          Services
        </a>
        <a href="/#" className="mr-5">
          Pricing
        </a>
        <a href="/#">About Us</a>
      </div>
      <div>
        <button className="get-btn text-black font-bold px-3 py-1 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
