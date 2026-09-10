import myLogoImg from '../assets/logo-text.png'

function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-blue-200 px-6 py-4 shadow-sm">
      <div className="flex justify-between items-center"> 
        {/* LOGO */}
        <div className="flex-1 flex justify-start font-bold text-xl">
            <img src={myLogoImg} alt="" width={150} />
        </div>
        
        {/* middle part */}
        <div className="flex-1 flex justify-center items-center gap-6">
          <a href="#" className="hover:text-blue-600  text-pink-700">Home</a>
          <a href="#" className="hover:text-blue-600">technologies</a>
          <a href="#" className="hover:text-blue-600">Projects</a>
          <a href="./Footer.tsx" className="hover:text-blue-600">Contact</a>
        </div>
        
        {/* button */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <button className="hover:text-blue-600">Sign In</button>
          <button className="bg-fuchsia-500 text-white px-4 py-2 rounded-full">Sign Up</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
