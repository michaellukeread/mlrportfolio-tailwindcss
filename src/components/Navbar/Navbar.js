const Navbar = () => (
  <nav className="flex h-full w-full lg:h-[10vh] bg-blue-600 xl:bg-transparent">
    <ol className="flex w-full text-2xl text-white items-center lg:mx-6 flex-col lg:items-end lg:flex-row lg:gap-12 lg:ml-14 md:text-left xl:ml-14 xl:text-black 2xl:ml-48">
      <li className="hover:font-bold hover:cursor-pointer hover:underline transition-all h-16 lg:h-0">Home</li>
      <li className="hover:font-bold hover:cursor-pointer hover:underline transition-all h-16 lg:h-0">Projects</li>
      <li className="hover:font-bold hover:cursor-pointer hover:underline transition-all h-16 lg:h-0">Contact</li>
    </ol>
  </nav>
)

export default Navbar
