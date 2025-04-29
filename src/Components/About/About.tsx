import { motion } from 'framer-motion';
import img1 from '../../../public/imge1 (2).jpg'
const About = () => {
  return (
    <>
     <div className="py-16 w-fill bg-gray-100  overflow-hidden">
      <div className="container  mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
       
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 w-fill lg:mb-0 lg:w-1/2"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
          <div className="bg-green-100 rounded-full h-1 w-10 mb-4"></div>
          <p className="text-gray-700 mb-2">
            Turn Market Volatility Into Opportunity
          </p>
          <p className="text-gray-600 w-fill mb-4">
            At Amisa Academy, we're your gateway to mastering Forex and cryptocurrencies.
            Whether you're exchanging USDT security, analyzing trends, or placing your first trade,
            we cut through the noise with actionable insights and expert-led training.
          </p>
          <p className="text-gray-600 w-fill mb-4">
            We don't just teach markets—we decode them. From instant crypto swaps to
            institutional-grade trading strategies, we equip you with the precision tools and
            confidence to thrive in fast-paced financial landscapes.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md flex items-center">
            Read More
            <motion.svg
              className="ml-2 w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </motion.svg>
          </button>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <img
            src={img1} 
            alt="Forex Trading"
            className="rounded-lg shadow-md max-w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>

    </>
  )
}

export default About