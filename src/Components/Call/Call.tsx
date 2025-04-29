import { AcademicCapIcon, BarsArrowDownIcon, BriefcaseIcon, CodeBracketIcon, CodeBracketSquareIcon, PlayIcon, ShoppingCartIcon, SignalIcon, TrashIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
// import { FaUserGraduate, FaBriefcase, FaHandsHelping, FaCertificate } from 'react-icons/fa';
const Call = () => {
  return (
    <>
        <div className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
      
        <div className="mb-12 text-center flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-3xl font-bold mb-2">Call To Action</h2>
          <p className="text-gray-400">Explore Learning Paths</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md mt-6"
          >
            Call To Action
          </motion.button>
        </div>

          {/* Features Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <AcademicCapIcon className="h-10 w-10 text-indigo-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Industry-Leading Instructors
            </h3>
            <p className="text-gray-500 text-sm">
              Learn from certified blockchain developers, seasoned traders, and Web3
              entrepreneurs who've navigated bull and bear markets. No theory-just actionable
              strategies.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <BriefcaseIcon className="h-10 w-10 text-green-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Future-Proof Curriculum
            </h3>
            <p className="text-gray-500 text-sm">
              Stay ahead with courses updated weekly. Covering Bitcoin, Ethereum, DeFi, NFTs,
              smart contracts, and the latest in AI-driven crypto tools.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <CodeBracketIcon className="h-10 w-10 text-yellow-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Hands-On Learning
            </h3>
            <p className="text-gray-500 text-sm">
              Secure trades, audit smart contracts, and build your own crypto portfolio in a
              risk-free sandbox environment. Practice makes profits.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <BarsArrowDownIcon className="h-10 w-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Certification & Job Support
            </h3>
            <p className="text-gray-500 text-sm">
              Earn globally-recognized credentials and get career guidance for roles in
              blockchain development, crypto analysis, or startup entrepreneurship.
            </p>
          </motion.div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mt-4">What we have achieved so far</h2>
          <p className="text-gray-400 mb-8">
            From 0 to 50+ courses, 10+ locations, and 5,000+ success stories—we've turned curiosity into confidence, and learners into leaders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h3 className="text-4xl font-bold text-green-500 mb-2">17</h3>
              <p className="text-gray-400 uppercase text-sm">Student</p>
            </motion.div>

          
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h3 className="text-4xl font-bold text-green-500 mb-2">2</h3>
              <p className="text-gray-400 uppercase text-sm">Locations</p>
            </motion.div>

          
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h3 className="text-4xl font-bold text-green-500 mb-2">6</h3>
              <p className="text-gray-400 uppercase text-sm">Courses</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute top-0 right-0 h-full w-1/2 bg-cover bg-center"

        
      ></div>
    </div>
  


    </>
  )
}

export default Call