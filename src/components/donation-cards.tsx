'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const donationOptions = [
  {
    title: "נשמה אחת",
    price: "18",
    description: "תומכים בפעילות של מפגש אחד לאסיר אחד, בו אני מגיע עם מוזיקה, תפילות ושיחות מהלב.",
    image: "/1.jpeg"
  },
  {
    title: "5 נשמות",
    price: "90",
    description: "תומכים בחמישה אסירים, ומעניקים להם את האפשרות להשתתף במפגש מלא אור, תקווה ותפילה.",
    image: "/2.jpeg"
  },
  {
    title: "10 נשמות",
    price: "180",
    description: "תרומה שתומכת בקבוצה גדולה יותר, ומאפשרת לי להרחיב את הפעילות.",
    image: "/3.jpeg"
  },
  {
    title: "20 נשמות",
    price: "360",
    description: "עוזרים לתמוך בקבוצה גדולה של אסירים, להביא אור ללבבות שזקוקים לו כל כך.",
    image: "/4.jpeg"
  },
  {
    title: "תרומה חופשית",
    price: "לבחירתך",
    description: "כל סכום שתבחרו יכול להאיר נשמות נוספות ולעזור לי להמשיך להכניס אור לכל פינה חשוכה.",
    image: "/5.jpeg"
  }
];

export default function DonationCards() {
  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-accent-cream via-white to-accent-orange/10">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">בחרו את מסלול התרומה שלכם</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">כל תרומה מאירה נשמה נוספת</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donationOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8 bg-gradient-to-b from-white to-orange-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{option.title}</h3>
                <div className="text-3xl font-bold text-primary-dark mb-4">
                  {option.price} ₪
                </div>
                <p className="text-gray-600 mb-6 min-h-[80px]">
                  {option.description}
                </p>
                <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl 
                                 py-4 px-6 font-bold text-lg shadow-lg
                                 hover:from-primary-dark hover:to-primary 
                                 transition-all duration-300 transform hover:scale-[1.02]">
                  לחצו לתרומה
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}