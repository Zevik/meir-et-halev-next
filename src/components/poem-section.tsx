'use client'

import { motion } from "framer-motion";

export default function PoemSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* כותרת ראשית עם אפקט */}
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
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
          className="bg-white/50 backdrop-blur-sm rounded-3xl p-12 shadow-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-2xl leading-relaxed text-gray-700 text-right space-y-6"
          >
            <p>
              יש לי פרצוף ואתם שולחים אותו לכלא<br />
              אל מאחורי הסורגים<br />
              שם יש אנשים שסגורים חודשים או שנים<br />
              ואני מאיר להם פנים<br />
              אני שר להם מהלב שלי<br />
              מתפלל עליהם בקול ביחד<br />
              מבקש ריפוי ותקנה<br />
              קורא איתם שמע ישראל בקול גדול<br />
              וביחד אנחנו שוברים את החומות<br />
              <br />
              בואו נצעק חזק<br />
              שזה יגיע לכל מי שנמצא פה<br />
              ובכל כלא בעולם<br />
              כדי כל אחד יקבל את מה שהוא צמא לו<br />
              מה שהוא באמת באמת צריך.<br />
              <br />
              האותיות מתעופפות בין חדרי הכלא<br />
              והלב<br />
              מגיעות לכל הנפשות<br />
              מגיעות פנימה לתוכינו לכל החדרים<br />
              מביאות רפואה ואור<br />
              מסתובבות מתערבבות והופכות לתפילות יפות<br />
              יפות לרפואה שלנו<br />
              מביאות ריפוי למה שעשינו<br />
              למה שעשו לנו.<br />
              <br />
              להתפלל במקום חשוך כל כך<br />
              זה לא כמו להתפלל בשדה<br />
              זה עמוק מאוד. מאוד<br />
              וכשאנחנו מתחבקים במעגל<br />
              זה לא כמו להתחבק בפסטיבל.<br />
              זה לבן על גבי שחור אהבה.<br />
              כשאנחנו צוחקים ממש נשברים מצחוק<br />
              מתנערים לרגע מהשמיכה העבה של הכבדות<br />
              הביתה<br />
              אני מזמין<br />
              למקום שלכל אחד יש בבפנים של הנשמה<br />
              בית
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}