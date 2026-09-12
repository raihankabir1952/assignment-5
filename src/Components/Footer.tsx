import logo from '../assets/logo-text.png';

function Footer() {
  return (
    <footer className="bg-white px-4 md:px-6 py-10 border-t border-gray-100 mt-20">
     
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Dev Stack" className="h-6 w-auto object-contain" />
            <span className="font-bold text-xl text-slate-800">Dev Stack</span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          
         
          <div className="flex items-center justify-center md:justify-start gap-3 text-sm font-medium text-gray-500 w-full">
            <a href="#" className="hover:text-[#e21b79]">GitHub</a>
            <span className="text-gray-300 md:hidden">•</span>
            <a href="#" className="hover:text-[#e21b79]">Twitter</a>
            <span className="text-gray-300 md:hidden">•</span>
            <a href="#" className="hover:text-[#e21b79]">LinkedIn</a>
          </div>
        </div>

        
        <div className="hidden md:flex flex-col items-start text-left gap-4">
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800">Product</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-400 font-medium">
            <li><a href="#" className="hover:text-[#e21b79]">Home</a></li>
            <li><a href="#" className="hover:text-[#e21b79]">Technologies</a></li>
            <li><a href="#" className="hover:text-[#e21b79]">Projects</a></li>
          </ul>
        </div>

        
        <div className="hidden md:flex flex-col items-start text-left gap-4">
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800">Company</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-400 font-medium">
            <li><a href="#" className="hover:text-[#e21b79]">About</a></li>
            <li><a href="#" className="hover:text-[#e21b79]">Contact</a></li>
            <li><a href="#" className="hover:text-[#e21b79]">Careers</a></li>
          </ul>
        </div>

        
        <div className="hidden md:flex flex-col items-start text-left gap-4">
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800">Legal</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-400 font-medium">
            <li><a href="#" className="hover:text-[#e21b79]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#e21b79]">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-100 pt-6 flex flex-row justify-between items-center text-[11px] md:text-xs text-gray-400 w-full px-1">
        <div>
          © 2026 Dev Stack. All rights reserved.
        </div>
        <div className="flex items-center gap-3 md:gap-4 font-medium">
          <a href="#" className="hover:text-[#e21b79]">Privacy</a>
          <a href="#" className="hover:text-[#e21b79]">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
