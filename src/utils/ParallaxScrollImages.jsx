"use client";

import { motion } from "framer-motion";

export const ParallaxScrollImages = ({ images = [], scrollSpeed = 20, direction = "right" }) => {
    if (!images.length) return null;

    const animationX = direction === "right" ? ["0%", "-100%"] : ["-100%", "0%"];

    return (
        <div className="relative w-full overflow-hidden py-4">
            {/* Gradient edges for premium look */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0e0e0e] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0e0e0e] to-transparent pointer-events-none" />

            <div className="flex w-max">
                <motion.div
                    className="flex gap-6"
                    animate={{ x: animationX }}
                    transition={{
                        duration: scrollSpeed,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{ willChange: "transform" }}
                >
                    {/* Duplicate full strip once for seamless loop */}
                    {[...images, ...images].map((imgUrl, index) => (
                        <img
                            key={index}
                            src={imgUrl}
                            alt={`project-img-${index}`}
                            className="w-[300px] h-[180px] object-cover rounded-lg border border-white/10 flex-shrink-0"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
