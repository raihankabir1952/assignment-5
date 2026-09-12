import myLogoImg from '../assets/logo-text.png'

function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-blue-200 px-4 md:px-6 py-4 shadow-sm">
      <div className="flex justify-between items-center"> 
        
        
        <div className="flex-1 flex justify-start md:hidden">
          <button className="text-gray-700 focus:outline-none cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        
        <div className="flex-1 flex justify-center md:justify-start font-bold text-xl">
            <img src={myLogoImg} alt="DevStack" width={130} className="md:w-[150px] object-contain" />
        </div>
        
        <div className="hidden md:flex flex-1 justify-center items-center gap-6 font-medium text-sm lg:text-base">
          <a href="#" className="hover:text-blue-600 text-pink-700">Home</a>
          <a href="#" className="hover:text-blue-600">technologies</a>
          <a href="#" className="hover:text-blue-600">Projects</a>
          <a href="./Footer.tsx" className="hover:text-blue-600">Contact</a>
        </div>
        
       
        <div className="flex-1 flex justify-end items-center gap-2 md:gap-4 text-xs md:text-sm">
          <button className="hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer">Sign In</button>
          <button className="bg-fuchsia-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full font-medium whitespace-nowrap cursor-pointer shadow-sm">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Nav;
