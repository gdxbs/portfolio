import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from "next/legacy/image"
import { Spotlight } from './ui/Spotlight'


const Footer = () => {
    return (
      <footer className="w-full pb-10 mb-[100px] md:mb-5 relative" id="contact">
          {/* Background grid image */}
          <div className="w-full absolute left-0 -bottom-5 min-h-96 z-0">
              <Image
                src="/footer-grid.svg"
                alt="grid"
                layout="fill"
                objectFit="cover"
                className="opacity-50"
                priority
              />
          </div>
  
          {/* Content container */}
          <div className="flex flex-col items-center z-10 relative">
              <h1 className="heading lg:max-w-[45vw]">
                  Ready to take <span className="text-purple">your</span> digital presence to the next level?
              </h1>
              <p className="text-white-200 md:mt-10 my-5 text-center">
                  Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
              </p>
              <a href="mailto:gwbateham@gmail.com">
                  <MagicButton 
                      title="Let's get in touch"
                      icon={<FaLocationArrow />}
                      position="right"
                  />
              </a>
          </div>
  
          {/* Footer bottom section */}
          <div className="flex mt-16 md:flex-row flex-col justify-between items-center z-10 relative">
              <p className="md:text-base text-sm md:font-normal font-light mb-5 lg:mb-0">
                  Powered by Next.js
              </p>
  
              <div className="flex items-center md:gap-3 gap-6">
                  {socialMedia.map((profile) => (
                      <button key={profile.id}>
                          <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                              <a href={profile.link} className="flex">
                                  <Image src={profile.img} alt="" width={20} height={20}/>
                              </a>
                          </div>
                      </button>
                  ))}
              </div>
          </div>
      </footer>
    )
  }
  
  export default Footer;
  
  