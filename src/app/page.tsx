'use client'

import { motion } from "framer-motion";
import DonationCards from "@/components/donation-cards";
import VideoSection from "@/components/video-section";
import PoemSection from "@/components/poem-section";
import Image from "next/image";

// קומפוננטה חדשה להנפשת טקסט מילה אחרי מילה
const AnimatedText = () => {
  const text = "שלוש פעמים בשבוע, אני נוסע לבתי כלא בארץ, למפגשים של תרפיה עם מוזיקה, עם שירה, עם תפילה ועם דיבורים מהלב. שלוש פעמים בשבוע אני יורד לבור חשוך להאיר את הלב, וכל פעם אנחנו עוברים ביחד מסע מיוחד וטוב, פנימה. רק בזכות הוראות הקבע שלכם אני יכול להמשיך בפעילות המיוחדת הזאת וכך אתם מהווים חלק ממשי מהאור שחודר אל הלבבות מבעד לחומות.";
  const words = text.split(" ");

  return (
    <motion.div 
      className="max-w-5xl mx-auto backdrop-blur-sm bg-white/10 rounded-3xl p-10 border border-white/20"
    >
      <p className="text-3xl md:text-4xl text-white leading-relaxed text-center font-light">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mx-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: i * 0.1,  // כל מילה מתחילה 0.1 שניות אחרי הקודמת
              ease: "easeOut"
            }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <main className="relative min-h-[90vh] overflow-hidden">
        {/* גרדיאנט רקע מונפש */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500">
          {/* אפקט גלים */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-white/5"
              initial={{ y: 0 }}
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, 1, 0]
              }}
              transition={{
                duration: 8,
                delay: i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                filter: 'blur(8px)',
                transform: `scale(${1 + i * 0.1})`
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 py-20">
          {/* תוכן ראשי */}
          <div className="flex flex-col items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4
                           [text-shadow:_2px_2px_10px_rgb(0_0_0_/_20%)]">
                מאיר את הלב
              </h1>
              <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
            </motion.div>
            
            <AnimatedText />

            {/* כפתור קריאה לפעולה */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#donate"
              className="rounded-full bg-white/90 backdrop-blur-sm text-orange-500 
                       px-10 py-5 text-xl font-bold
                       hover:bg-white hover:shadow-lg
                       transition-all duration-300
                       fixed bottom-6 right-4 left-4 text-center
                       sm:static sm:w-auto
                       border border-white/20"
            >
              תרום עכשיו
            </motion.a>
          </div>
        </div>
      </main>

      {/* סקשנים נוספים */}
      <VideoSection />
      <DonationCards />
      <PoemSection />

      {/* תמונה בסוף העמוד */}
      <div className="relative container mx-auto px-4 py-20">
        <Image
          src="/path/to/your/image.jpg"
          alt="Descriptive Alt Text"
          width={1200}
          height={800}
          className="rounded-3xl shadow-lg mx-auto"
        />
      </div>

      {/* פוטר משודרג */}
      <footer className="bg-gradient-to-b from-white to-orange-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 text-lg">
            ליצירת קשר: 052-6518168
          </p>
        </div>
      </footer>
    </div>
  );
}