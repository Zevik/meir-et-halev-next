'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PoemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const poemLines = [
    "יש לי פרצוף ואתם שולחים אותו לכלא",
    "אל מאחורי הסורגים",
    "שם יש אנשים שסגורים חודשים או שנים",
    "ואני מאיר להם פנים",
    "אני שר להם מהלב שלי",
    "מתפלל עליהם בקול ביחד",
    "מבקש ריפוי ותקנה",
    "קורא איתם שמע ישראל בקול גדול",
    "וביחד אנחנו שוברים את החומות",
    "",
    "בואו נצעק חזק",
    "שזה יגיע לכל מי שנמצא פה",
    "ובכל כלא בעולם",
    "כדי כל אחד יקבל את מה שהוא צמא לו",
    "מה שהוא באמת באמת צריך.",
    "",
    "האותיות מתעופפות בין חדרי הכלא",
    "והלב",
    "מגיעות לכל הנפשות",
    "מגיעות פנימה לתוכינו לכל החדרים",
    "מביאות רפואה ואור",
    "מסתובבות מתערבבות והופכות לתפילות יפות",
    "יפות לרפואה שלנו",
    "מביאות ריפוי למה שעשינו",
    "למה שעשו לנו.",
    "",
    "להתפלל במקום חשוך כל כך",
    "זה לא כמו להתפלל בשדה",
    "זה עמוק מאוד. מאוד",
    "וכשאנחנו מתחבקים במעגל",
    "זה לא כמו להתחבק בפסטיבל.",
    "זה לבן על גבי שחור אהבה.",
    "כשאנחנו צוחקים ממש נשברים מצחוק",
    "מתנערים לרגע מהשמיכה העבה של הכבדות",
    "הביתה",
    "אני מזמין",
    "למקום שלכל אחד יש בבפנים של הנשמה",
    "בית"
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="container mx-auto px-2 sm:px-4 max-w-4xl">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 
                     bg-gradient-to-r from-orange-500 to-yellow-500 
                     text-transparent bg-clip-text"
        >
          יש לי פרצוף
        </motion.h2>

        {/* רקע דקורטיבי */}
        <div className="absolute -top-10 right-0 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-10 left-0 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-30" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-white/50 backdrop-blur-sm rounded-3xl p-12 shadow-xl"
        >
          <div className="text-2xl leading-relaxed text-gray-700 text-right">
            {poemLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                className={line === "" ? "h-6" : ""}
              >
                {line}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}