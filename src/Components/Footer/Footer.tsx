
const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-4">Amisa Academy</h3>
      <p className="text-gray-400 text-center mb-4">
        Tech Dream. Content First.
      </p>
      <div className="flex space-x-4 mb-4">
        <a href="#" className="text-gray-400 hover:text-white">
        
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.67-1.72 1.13-2.77 1.33a7.9 7.9 0 0 0 3.49-4.14c-.82.49-1.73.84-2.73 1a3.9 3.9 0 0 0-6.64 3.57 11.92 11.92 0 0 1-9.62-4.87c-.34.59-.54 1.27-.54 2 0 0 0 3.34 1.67a3.9 3.9 0 0 1-1.85-.5v.05c0 2.33 1.66 4.28 3.84 4.72a3.9 3.9 0 0 1-1.83-.22c.49 1.92 1.9 3.31 3.57 3.35a7.86 7.86 0 0 1-4.81 1.66c-.32 0-.64-.02-.93-.05a11.9 11.9 0 0 0 6.41 2.56 11.93 11.93 0 0 0 6.28-2.63c1.9-1.84 2.96-4.5 2.96-7.21 0-.34-.02-.65-.08-.95a8.28 8.28 0 0 0 2.26-2.16z"/></svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V8c0-2.76 1.69-4.25 4.1-4.25S18 5.24 18 8v4h2v3h-2v2.8c1.39-1.1 2.37-2.92 2.37-4.8z"/></svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-6h2v6zm4 0h-2v-3h2v3zm2-9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
        </a>
      </div>
      <p className="text-gray-500 text-xs">
        TechCorner @ 2025
      </p>
    </div>
  </div>
  )
}

export default Footer