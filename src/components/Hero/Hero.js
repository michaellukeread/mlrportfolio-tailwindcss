const Hero = () => (
  <div className="bg-blue-600 xl:bg-transparent ">
    <div className="text-white flex flex-col gap-4 h-[90vh] justify-center text-center mx-6 md:ml-14 md:text-left xl:ml-14 xl:text-black 2xl:ml-48">
      <h1 className="text-6xl font-bold">Hi, I'm Michael Read</h1>
      <p className="text-2xl md:w-5/6 xl:w-1/2">Welcome to my online portfolio, I have an interest in a range of topics but focus on web design and development</p>
      <span><button className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-blue-600 xl:text-white bg-white xl:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">See My Work</button></span>
    </div>

    <div className="shadow-inner fixed top-[35rem] right-0 transform hidden -translate-y-1/2 rounded-full w-[80rem] h-[80rem] bg-blue-600 lg:translate-x-[65rem] xl:block xl:translate-x-[50rem] 2xl:translate-x-[45rem]"></div>
  </div>
)

export default Hero
