import React, { useState } from 'react'
import { ReactComponent as SolutionIcon } from '../../Icons/solution.svg'

export const Services = () => {
    return (
        <div className="flex flex-wrap lg:flex-no-wrap w-full px-2">
            <div className="w-full lg:w-1/3 lg:p-6">
                <div className="text-gray-700 text-xl lg:text-2xl">Always at service!</div>
                <h1 className="text-gray-900 text-4xl lg:text-6xl leading-none font-semibold">
                    Creative ideas for developing business
                </h1>
            </div>
            <div className="w-full lg:w-2/3 flex flex-wrap items-center justify-around">
                <ServiceCard
                    Icon={SolutionIcon}
                    title="Web Applications"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <ServiceCard Icon={SolutionIcon} title="Web Applications" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                <ServiceCard Icon={SolutionIcon} title="Web Applications" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                <ServiceCard Icon={SolutionIcon} title="Web Applications" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
            </div>
        </div>
    )
}


export const ServiceCard = ({ Icon, title = "", desc = "" }) => {
    const [seeMore, setSeeMore] = useState(false)
    const toggleSeeMore = () => setSeeMore(!seeMore)
    return (
        <div className="w-full lg:w-1/2 px-2">
            {/* <img className="block w-16 h-16" src={icon} alt={title} /> */}
            <Icon className="fill-current w-12 h-12 text-brand-primary my-4" />
            <h4 className="block text-2xl text-gray-900 font-semibold my-4">{title}</h4>
            <div className="text-gray-700 my-4">
                <p className={`${seeMore ? "" : "truncate"}`}>{desc}</p>
                <button className="hover:text-blue-600 outline-none" onClick={toggleSeeMore}>{seeMore ? "see less" : "see more"}</button>
            </div>
        </div>
    )
}
