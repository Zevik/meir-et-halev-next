'use client'

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="relative -mt-20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/5O4o7cM72yQ"
              title="מאיר את הלב - וידאו"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-8 text-center bg-gradient-to-b from-white to-orange-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">צפו בפעילות שלנו</h2>
            <p className="text-gray-600">הצטרפו למסע המיוחד שלנו בבתי הכלא</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}