import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from "next/legacy/image"

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
        <h1 className="heading">
            A small selection of {''}
            <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 sm:gap-y-8 lg:gap-y-4 lg:-mb-20 2xl:gap-y-32 2xl:mb-20 2xl:mt-20">
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className=" sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                    <PinContainer title=":-)" href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                        <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                            <img src="/bg.png" alt="bgimg" />
                        </div>
                        <div className="absolute inset-4 flex items-center justify-center">
                            {id === 5 ? (
                                <img
                                    src={img}
                                    alt={title}
                                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                                />
                            ) : (
                                <Image
                                    src={img}
                                    alt={title}
                                    layout="fill"
                                    objectFit="contain"
                                    className={id === 4 ? '2xl:scale-150 scale-100' : ''}
                                />
                            )}
                        </div>
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {title}
                        </h1>

                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                            {des}
                        </p>

                        <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center">
                        {iconLists.map((icon, index) => (
                            <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center" style={{transform:`translateX(-${5 * index * 2}px)`}}>
                                <img src={icon} alt="icon5" className="sm:p-2 sm:w-8 sm:h-8 p-1.5 w-10 h-10 xl:p-2 xl:w-12 xl:h-12"/>
                            </div>
                        ))}
                        </div>
                            <div className="flex justify-center items-center">
                                <p className="flex lg:text-xl md:text-xs text-sm text-purple">Click Me!</p>
                                <FaLocationArrow className="ms-3" color="#CBACF9" />
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>

    </div>
  )
}

export default RecentProjects