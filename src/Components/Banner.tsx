import banner from '../assets/banner-stack.png';

function Banner() {
  return (

    
      <div className=" p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Part */}
        <div className="flex flex-col items-start text-left gap-5">
          <h1 className="text-4xl md:text-5xl font-black font-sans text-slate-900 tracking-tight leading-tight">
            Build Your Ideal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
              Development Stack
            </span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, 
            compare them side by side, and put together the stack that fits your next project.
          </p>
          
          {/* Buttons*/}
          <div className="flex items-center gap-4 mt-4">
            <button className="bg-[#e21b79] text-white px-5 py-2.5 rounded text-sm font-semibold shadow-sm hover:bg-[#c11463] transition-colors">
              Explore Technologies
            </button>
            <button className="border border-gray-200 text-gray-600 px-6 py-2.5 rounded text-sm font-medium hover:bg-gray-50 transition-colors bg-white">
              Learn More
            </button>
          </div>
        </div>

        {/* Right side Banner*/}
        <div className="flex justify-center md:justify-end">
          <img 
            src={banner} 
            alt="Development Stack Illustration" 
            className="w-full `max-w-100` h-auto object-contain dynamic-image"
          />
        </div>
    </div>
  );
}

export default Banner;
