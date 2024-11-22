import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import QuarterBox from "@/components/shared/QuarterBox";

const CoreTrackData = [
  {
    header: "Quarter I",
    discription: "CS-101: Object-Oriented Programing using Typescripyt",
    number: 1
  },
  {
    header: "Quarter II",
    discription: "WS-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (COK) for Transform",
    number: 2
  },
  {
    header: "Quarter III",
    discription: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3
  }
]


const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specializations):"
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        {/* Content */}
        <div className="max-w-screen-md">
          <h4 className="text-teal-700 font-semibold text-lg mt-4">Programs of Studies</h4>
          <h2 className="text-4xl font-bold whitespace-pre-line">{header}</h2>
          <p className="mt-3 text-xl text-slate-600">Every participant of the program will start by completing the following three core courses</p>
          <div className="mt-5">
            <Button text="Learn More" />
          </div>
        </div>
        {/* Boxes */}
        <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6">

          {
            CoreTrackData.map( (item, i) => {
              console.log(item.header)
              return (
                
                <QuarterBox
                key={item.number}
                discription={item.discription}
                header={item.header}
                number={i + 1}
                />      
                      
          )
          }
          )
          }

        </div>

      </Wrapper>
    </section>
  )
}

export default CoreTracks