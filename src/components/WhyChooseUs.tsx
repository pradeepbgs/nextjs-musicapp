import React from 'react'
import {musicSchoolContent} from '@/components/musicSchoolContent'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs