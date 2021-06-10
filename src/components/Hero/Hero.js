const Hero = () => (
  <div className="bg-blue-600 xl:bg-transparent ">
    <div className="text-white flex flex-col gap-4 h-screen justify-center lg:ml-14 xl:ml-14 xl:text-black 2xl:ml-48">
      <h1 className="text-6xl font-bold">Michael Read Portfolio</h1>
      <p className="text-2xl">Junior Front-End Developer</p>
      <span><button className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-blue-600 xl:text-white bg-white xl:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">See My Work</button></span>
    </div>

    <div className="shadow-inner fixed top-[35rem] right-0 transform hidden -translate-y-1/2 rounded-full w-[80rem] h-[80rem] bg-blue-600 lg:translate-x-[65rem] xl:block xl:translate-x-[50rem] 2xl:translate-x-[45rem]"></div>
  </div>
)

export default Hero
