import img2 from '../../../public/11.png'
import { motion } from 'framer-motion';

const Location = () => {
  return (
    <>
      <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Locations</h2>
        <div className="px-4">
          <img src={img2} alt="Our Locations" className="rounded-lg shadow-md w-full" />
          <p className="text-gray-700 mt-4 text-sm text-center">Find our academies in the following locations.</p>
          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-center">
            <div>Damascuse</div>
            <div>Homse</div>
            <div>Hama</div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Location