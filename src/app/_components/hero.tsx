"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { motion } from "framer-motion";

export default function Hero() {
    const images = [
        '/model1.png',
        '/model2.png',
        '/model3.png',
        '/model4.png',
        '/model5.png',
    ]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);

    }, []);

    return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center mt-20 py-10 md:py-0 md:px-20">
        <div className="w-full md:w-2/5 md:h-full flex flex-col items-center justify-center px-10 md:px-10">
            <h1 className="text-6xl text-center">
                Fashion made for you
            </h1>
            <h3 className="mt-4 md:px-0 text-xl md:text-xl lg:text-2xl font-sans text-center">
                Visualize how clothes fit your unique body. Simply click, try, and shop with confidence!
            </h3>
            <div  className="mt-6 hidden md:inline-block bg-[var(--taupe)] text-white py-2 px-6 rounded-full text-2xl hover:bg-opacity-80">
                Try now
            </div>
        </div>
        <div className="w-full md:w-3/5 md:h-full flex items-center justify-center">
            {/* desktop image */}
            <Image
            src="/hero-thumbnail.png" 
            alt="example pictures"
            width={500} 
            height={300}
            className="hidden md:block"
            />
            {/* mobile slideshow */}
            <div className="relative mt-10 mb-10 flex items-center justify-center h-[400px] w-full overflow-hidden md:hidden">
                {images.map((src, i) => {
                    const pos = (i - index + images.length) % images.length;
                    let scale = pos === 0 ? 1 : 0.5;
                    let opacity = pos === 2 ? 0 : 1;
                    let translateX = pos === 0 ? "0%" : pos === 1 ? "-110%" : "110%";

                    return (
                    <motion.img
                        key={i}
                        src={src}
                        alt="slide"
                        className="absolute object-cover rounded-4xl"
                        style={{ width: "45%", height: "80%" }}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale, opacity, x: translateX }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    );
                })}
            </div>
        </div>
        {/* mobile try on button */}
        <div className="block md:hidden w-full flex justify-center items-center">
            <Link href="#try-now" className="inline-block bg-[var(--taupe)] text-white py-2 px-6 rounded-full text-2xl hover:bg-opacity-80">
                Try now
            </Link>
        </div>
        {/* background image */}
        <Image 
            src="/stars.png" 
            alt="sars"
            fill
            className="mt-10 object-cover z-[-1]" 
        />
    </div>
    )
}
