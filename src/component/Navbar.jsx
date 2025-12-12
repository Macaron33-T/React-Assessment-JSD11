const Navbar = () => {
  return (
    <nav className="flex justify-end items-center p-4 border-b border-gray-300 bg-gray-100">
      <a
        href="#"
        className="ml-5 text-base font-bold text-black no-underline cursor-pointer"
      >
        Owner
      </a>
      <a
        href="#"
        className="ml-5 text-base font-bold text-black no-underline cursor-pointer"
      >
        Home
      </a>
    </nav>
  );
};

export default Navbar;
