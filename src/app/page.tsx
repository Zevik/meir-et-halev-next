'use client'

import { motion } from "framer-motion"; // Removed useAnimate
import DonationCards from "@/components/donation-cards";
import VideoSection from "@/components/video-section";
import PoemSection from "@/components/poem-section";
import Image from "next/image";

// קומפוננטה להנפשת טקסט מילה אחרי מילה
const AnimatedText = () => {
  const text = "שלוש פעמים בשבוע, אני נוסע לבתי כלא בארץ, למפגשים של תרפיה עם מוזיקה, עם שירה, עם תפילה ועם דיבורים מהלב. שלוש פעמים בשבוע אני יורד לבור חשוך להאיר את הלב, וכל פעם אנחנו עוברים ביחד מסע מיוחד וטוב, פנימה. רק בזכות הוראות הקבע שלכם אני יכול להמשיך בפעילות המיוחדת הזאת וכך אתם מהווים חלק ממשי מהאור שחודר אל הלבבות מבעד לחומות.";
  const words = text.split(" ");

  return (
    <div className="max-w-5xl mx-auto">
      <p className="text-3xl md:text-4xl text-white leading-relaxed text-center font-light">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mx-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: i * 0.2,
              ease: "easeOut"
            }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
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
        {/* New overlay for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

        <div className="relative container mx-auto px-2 sm:px-4 py-20">
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
            </motion.div>
            
            <AnimatedText />
          </div>
        </div>
      </main>

      {/* סקשנים נוספים */}
      <VideoSection />
      
      {/* סקשן חדש עם כותרת וטקסט */}
      <section className="bg-white pt-4 pb-12"> {/* Changed from py-12 to pt-4 pb-12 */}
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-orange-500"
          >
            אבל מאיר! איך אפשר להצטרף לטוב הזה?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-center text-gray-700 max-w-3xl mx-auto"
          >
            תנו אור לנשמות בכלא – תמכו בכמה נשמות שתרצו להאיר
            <br />
            כל פעם שאני מגיע לבתי הכלא, אנחנו שרים, מתפללים ומביאים אור. כל מפגש הוא מסע משותף פנימה, להאיר את הלב. ואתם יכולים לבחור להיות חלק ממשי במסע הזה, לתת אור לכמה נשמות שתרצו.
          </motion.p>
        </div>
      </section>

      <DonationCards />
      <PoemSection />

      {/* Final section with background and image */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-20">
        <div className="container mx-auto px-2 sm:px-4 max-w-4xl"> {/* Changed to max-w-4xl to match poem section */}
          <Image
            src="/meir.jpeg"
            alt="מאיר את הלב"
            width={896}    // 56rem * 16px = 896px
            height={600}
            priority
            loading="eager"
            className="rounded-3xl shadow-lg mx-auto w-full"
          />
        </div>
      </section>

      {/* פוטר משודרג */}
      <footer className="bg-gradient-to-b from-white to-orange-50 py-8 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <p className="text-3xl md:text-4xl font-bold text-orange-500">
            מאיר אבינר{" "}
            <a 
              href="tel:052-6518168" 
              className="hover:text-orange-600 transition-colors"
            >
              052-6518168
            </a>
          </p>
        </div>
      </footer>

    </div>
  );
}