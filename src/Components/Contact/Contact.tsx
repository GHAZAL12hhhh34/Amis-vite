import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon} from '@heroicons/react/24/solid'; 
const Contact = () => {
  return (
  
    <div className="bg-gray-100 py-12 md:py-20">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
    
      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Contact
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Your success starts with a conversation. Whether you're a beginner or a pro, we're here to listen, advise, and support.
        </p>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     
        <div className="space-y-4">
          <div className="flex items-center">
            <MapPinIcon className="w-6 h-6 text-green-500 mr-3" />
            <span className="font-medium text-gray-700">Address</span>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="w-6 h-6 text-green-500 mr-3" />
            <span className="text-gray-700">+963958937477</span>
          </div>
          <div className="flex items-center">
            <EnvelopeIcon className="w-6 h-6 text-green-500 mr-3" />
            <span className="text-gray-700">amisa.academy.xyz@gmail.com</span>
          </div>
        </div>

       
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mt-4">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mt-4">
            <textarea
              placeholder="Message"
             
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-md mt-6 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Submit
          </motion.button>
        </div>
      </div>
    </div>
  </div> 

       
    
  )
}

export default Contact