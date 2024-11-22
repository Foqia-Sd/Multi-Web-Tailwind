"use client"


import Wrapper from "@/components/shared/Wrapper";
import QuarterBox from "@/components/shared/QuarterBox";
import Image from "next/image";

//Images
import Web3Img from "@/assets/images/web3.png";
import AiImg from "@/assets/images/ai.png";
import CloudImg from "@/assets/images/cloud.png"; 
import Ambient from "@/assets/images/ambient.png";
import Genomics from "@/assets/images/genomics.png";
import Network from "@/assets/images/ntp.png";

import { useState } from "react";

export const programsData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences",
    image: Web3Img,

    quaters: [
      {
        header: "Quarter IV",
        description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4
      },
      {
        header: "Quarter V",
        description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5
      },
    ]
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models",
    image: AiImg,

    quaters: [
      {
        header: "Quarter IV",
        description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      },
    ]
  },
  {
    slug: "cloud",
    header: "Cloud-Native Computing Specialization",
    description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: CloudImg,

    quaters: [
      {
        header: "Quarter IV",
        description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      },
    ]
  },
  {
    slug: "ambient",
    header: "Ambient Computing and IoT Specialization",
    description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: Ambient,

    quaters: [
      {
        header: "Quarter IV",
        description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      },
    ]
  },
  {
    slug: "gb",
    header: "Genomics and Bioinformatics Specialization",
    description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image: Genomics,

    quaters: [
      {
        header: "Quarter IV",
        description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      },
    ]
  },
  {
    slug: "ntp",
    header: "Network Programmability and Automation Specialization",
    description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image: Network,

    quaters: [
      {
        header: "Quarter IV",
        description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      },
    ]
  },
]

const SpecializedTracks = () => {

  const [selectedItem, setSelectedItem] = useState("wmd")

  const selectedItemData = programsData.find((item) => item.slug === selectedItem)
  console.log(selectedItem)


  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold whitespace-pre-line">Specialized Tracks:</h2>
          <p className="mt-3 text-xl text-slate-600 max-w-screen-sm">After completing the first three quarters practicing select one or more specializations consisting of two courses each: </p>
        </div>

        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
          {/* Content Left */}

          <div className="shadow-xl sticky top-28 self-start basis-8/12 rounded-xl border border-slate-200 py-8 px-8">
            <h4 className="text-primary text-lg font-medium">Specialized Program</h4>
            <h3 className="text-3xl font-bold">{selectedItemData?.header}</h3>
            <p className="text-2xl text-slate-600 mt-2 font-normal">{selectedItemData?.description}</p>
            <button className="text-teal-700 text-xl mt-4 underline">Learn More
            </button>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              {
                selectedItemData?.quaters.map((item) => (

                  <QuarterBox
                  key={item.number}
                    discription={item.description}
                    header={item.header}
                    number={item.number}
                    haveBorder={false}
                  />

                ))
              }

            </div>
          </div>

          {/* Content Right */}
          <div className="px-4 space-y-4 py-6 basis-4/12 flex-1">
            {
              programsData.map((item, i) => (
                <div onClick={() => setSelectedItem(item.slug)} key={item.slug} className="flex gap-x-4 items-center cursor-pointer">
                  <div className="flex-shrink-0 h-24 w-36 ">
                
                    <Image src={item.image} alt={item.header} className={"h-24 object-cover rounded-md"} />

                  </div>
                  <div>
                    <h4 className="text-primary font-medium">Specialized Program</h4>
                    <h3 className="text-xl font-semibold">{item.header}</h3>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </Wrapper>

    </section>

  )
}

export default SpecializedTracks