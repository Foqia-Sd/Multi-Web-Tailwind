import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import robot from "@/assets/images/robot.png";

const outcomePoints = [
  "Top 5 Metaverse jobs that will rule the future of tech industry",
  "Blockchain Developer Salary - Jun 2022",
  "Web3 Salaries Soar to $750,000 for Rank-and-File Devs",
  "The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet Uncharted Waters",
  "How To Become Metaverse Developer: Scope, Skills, and Salary",
];

const ProgramOutcome = () => {
  return (
    <section className="mt-16 md:mt-28">
      <Wrapper>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left - Image */}
          <div className="flex-1 w-full md:w-auto">
            <Image
              src={robot}
              alt="programoutcome"
              className="w-full h-auto max-w-sm md:max-w-full"
            />
          </div>
          {/* Right - Content */}
          <div className="flex-1">
            <h2 className="font-extrabold text-3xl md:text-5xl text-purple-700">
              The Outcome for Participants of the Program
            </h2>
            <p className="mt-4 text-slate-700 text-base md:text-xl font-medium leading-relaxed">
              The graduates of this program will own products (Full-Stack App
              Templates, AR and VR Experiences, and APIs) that are marketed
              globally by the Panaverse DAO and, if they like, will also be able
              to start off by offering services at a rate of $50 per hour
              ($96,000 per year). This would give Pakistani professionals and
              students a fantastic opportunity to better their financial
              situation while also giving the economy a much-needed boost by
              expanding software exports.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {outcomePoints.map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-base md:text-lg">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ProgramOutcome;
