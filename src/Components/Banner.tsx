import banner from '../assets/banner-stack.png';

function Banner() {
  return (
    <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-dashed border-blue-400/60 rounded-2xl">
      
    
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">
        
        <h1 className="text-3xl md:text-5xl font-black font-sans text-slate-900 tracking-tight leading-tight">
          Build Your Ideal <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
            Development Stack
          </span>
        </h1>
        
        <p className="text-gray-500 text-sm md:text-lg max-w-lg leading-relaxed">
          Explore frontend, backend, database, and tooling options, 
          compare them side by side, and put together the stack that fits your next project.
        </p>
        
        <div className="flex items-center gap-3 mt-2 w-full justify-center md:justify-start text-xs md:text-sm">
          <button className="bg-gradient-to-r from-[#ff5b35] to-[#e62382] text-white px-4 md:px-6 py-2.5 rounded-xl font-semibold shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer">
            Explore Technologies
          </button>
          <button className="border border-gray-200 text-gray-600 px-4 md:px-6 py-2.5 rounded-xl font-medium hover:bg-gray-50 transition-colors bg-white whitespace-nowrap cursor-pointer">
            Learn More
          </button>
        </div>
      </div>


      <div className="flex justify-center md:justify-end w-full">
        <img 
          src={banner} 
          alt="Development Stack Illustration" 
          className="w-full max-w-[280px] md:max-w-[400px] h-auto object-contain dynamic-image"
        />
      </div>
      
    </div>
  );
}

export default Banner;
