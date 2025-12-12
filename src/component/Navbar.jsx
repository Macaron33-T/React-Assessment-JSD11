const Navbar = () => {
  return (
    <nav className="flex justify-end items-center p-4 border-b border-gray-300 bg-white">
      <a
        href="#"
        className="ml-5 text-base font-normal text-black no-underline cursor-pointer"
      >
        Owner
      </a>
      <a
        href="#"
        className="ml-5 text-base font-normal text-black no-underline cursor-pointer"
      >
        Home
      </a>
    </nav>
  );
};

export default Navbar;
