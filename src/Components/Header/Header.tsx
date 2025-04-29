import { motion } from 'framer-motion';

const Header = () => {
  const headerVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
  };
  
  const titleVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.5, ease: "easeInOut" } },
  };
  
  const descriptionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } },
  };
  
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };
  return (
   <>
    <motion.div
      className="relative w-full bg-[url('/hi.jpg')] bg-cover bg-center min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <motion.div className="absolute w-full inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <motion.header
          className="absolute w-fill top-0 left-0 right-0 py-4 px-6 sm:px-8 md:py-6 flex justify-between items-center"
          variants={headerVariants}
          initial="initial"
          animate="animate"
        >
          <div className="font-bold w-fill text-xl sm:text-2xl">AMISA ACADEMY</div>
          <nav className="hidden md:flex space-x-4">
            <motion.a href="#home" className="hover:text-gray-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Home</motion.a>
            <motion.a href="#about" className="hover:text-gray-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>About</motion.a>
            <motion.a href="#courses" className="hover:text-gray-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Contact</motion.a>
            <motion.a href="#contact" className="hover:text-gray-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Footer</motion.a>
          </nav>
          <div className="flex items-center">
            <div className="md:hidden">
              <motion.button
                className="text-white focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"/>
                </svg>
              </motion.button>
            </div>
          
          </div>
        </motion.header>

        <div className="text-center px-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            variants={titleVariants}
            initial="initial"
            animate="animate"
          >
            Amisa Academy
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8"
            variants={descriptionVariants}
            initial="initial"
            animate="animate"
          >
            Trade Smart, Convert Fast
          </motion.p>
          <motion.button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
   </>
  )
}

export default Header