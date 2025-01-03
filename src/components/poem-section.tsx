'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PoemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const poemLines = [
   "יש לי פרצוף ואתם שולחים את הפרצוף שלי לכלא",
"אל מאחורי הסורגים שם יש אנשים שסגורים חודשים או שנים",
"ואני מאיר להם פנים",
"אני שר להם מהלב שלי, מתפלל עליהם בקול בנוכחותם",
"מבקש עבורם ריפוי ותקנה, מזמין אותם לצעוק איתי",
"אני קורא איתם שמע ישראל בקול גדול",
"בואו נשבור את הקירות של הכלא",
"בואו נצעק חזק שזה יגיע לכל מי שנמצא פה ובכל כלא בעולם",
"שכל אחד יקבל מה שהוא באמת צמא לו ומה שהוא באמת באמת צריך",
"אני אומר איתם את האלף בית בשיר, מדמיינים ביחד את האותיות מתעופפות",
"מגיעות לכל הנפשות, לכל החדרים בנפש, מביאות רפואה ומזינות באור",
"אנחנו שרים ביחד תפילות מבקשים אור - תאיר לנו את הלב",
"להתפלל במקום חשוך כל כך זה לא כמו להתפלל בשדה זה עמוק מאוד",
"כשאנחנו מתחבקים במעגל זה לא כמו להתחבק בפסטיבל זה לבן על גבי שחור, אהבה",
"כאשר אנחנו צוחקים, ממש נשברים מצחוק, מתנערים לרגע מהשמיכה העבה של הכבדות",
"אני מזמין למקום שלכל אחד יש בבפנים של הנשמה - בית"
  ];

  return (
    <section className="pt-8 pb-20 md:py-32 bg-gradient-to-br from-accent-cream via-accent-cream/30 to-accent-orange/10"> {/* Changed from pt-12 to pt-8 */}
      <div className="container mx-auto px-2 sm:px-4 max-w-4xl">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-4 {/* Changed from mb-8 to mb-4 */}
                     bg-gradient-to-r from-primary-dark to-primary 
                     text-transparent bg-clip-text"
        >
          יש לי פרצוף
        </motion.h2>

        {/* רקע דקורטיבי */}
        <div className="absolute -top-10 right-0 w-40 h-40 bg-accent-orange/30 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-10 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-30" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-accent-cream/10 backdrop-blur-sm rounded-3xl p-12 shadow-xl"
        >
          <div className="text-2xl leading-relaxed text-primary-dark/90 text-right">
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