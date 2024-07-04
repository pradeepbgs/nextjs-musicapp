import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'
import {instructors} from '@/data/instructor'

const Instructor = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="max-w-4xl mx-auto pb-40">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
        <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p> 
        <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructor
