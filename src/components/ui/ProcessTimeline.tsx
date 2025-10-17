"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

type Step = {
    number: number | string
    title: string
    description: string
}

export function ProcessTimeline({ steps }: { steps: Step[] }) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    // Animate vertical line height with scroll progress
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <div ref={ref} className="relative mx-auto max-w-5xl py-16 px-4 sm:px-6 lg:px-8">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-gray-200 h-full" aria-hidden="true" />
            <motion.div
                style={{ height: lineHeight }}
                className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[var(--blue-accent)] to-[var(--gold-accent)] origin-top"
                aria-hidden="true"
            />

            <div className="space-y-24">
                {steps.map((step, index) => (
                    <ProcessStep
                        key={index}
                        index={index}
                        number={step.number}
                        title={step.title}
                        description={step.description}
                    />
                ))}
            </div>
        </div>
    )
}

function ProcessStep({
                         index,
                         number,
                         title,
                         description,
                     }: {
    index: number
    number: number | string
    title: string
    description: string
}) {
    const isEven = index % 2 === 0

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center ${
                isEven ? "md:flex-row-reverse" : ""
            }`}
        >
            {/* Step content */}
            <div
                className={`w-full md:w-[45%] px-6 md:px-8 flex flex-col ${
                    isEven ? "md:items-end text-right md:pr-12" : "md:items-start text-left md:pl-12"
                }`}
            >
                <div className="max-w-xs w-full">
                    <h4 className="text-xl font-semibold text-[var(--navy-dark)] mb-2">
                        {title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
            </div>

            {/* Step circle */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                viewport={{ once: true }}
                className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[var(--blue-accent)] to-[var(--gold-accent)] text-white font-semibold shadow-md ring-4 ring-white z-10"
            >
                {number}
            </motion.div>

            {/* Connector pulse */}
            {/*<motion.div*/}
            {/*    initial={{ opacity: 0 }}*/}
            {/*    whileInView={{ opacity: 1 }}*/}
            {/*    transition={{*/}
            {/*        repeat: Infinity,*/}
            {/*        duration: 2,*/}
            {/*        ease: "easeInOut",*/}
            {/*    }}*/}
            {/*    className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--blue-accent)] blur-[1px]"*/}
            {/*/>*/}
        </motion.div>
    )
}
