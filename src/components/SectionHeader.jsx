import React, { useState } from 'react'
import { motion } from "motion/react";
import { TextReveal } from "./ui/Typography";
const SectionHeader = ({title}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="py-6 flex">
            <h4
                className="md:text-4xl text-2xl font-bold overflow-hidden uppercase p-4 rounded-xl bg-primary text-black cursor-pointer"
                onClick={() => setIsActive(!isActive)}
            >
                <motion.div
                    className="relative w-full h-full"
                    animate={{ top: isActive ? "-100%" : "0%" }}
                    transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
                    whileHover={{ scale: 1.1 }}
                >
                    <motion.div
                        className="bg-primary h-full w-full grid place-items-center text-black"
                        onClick={() => setIsActive(!isActive)}
                        whileHover={{ scale: 1.1 }}
                    >
                        <TextReveal>{title}</TextReveal>
                    </motion.div>
                </motion.div>
            </h4>
        </div>
    )
}

export default SectionHeader