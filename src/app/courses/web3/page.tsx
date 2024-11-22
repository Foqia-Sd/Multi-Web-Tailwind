// app/courses/web3/page.tsx
import Button from "@/components/shared/Button";
import Wrapper from "@/components/shared/Wrapper";

const Web3 = () => {
  return (
    <div className=" bg-gray-200">
      
      <Wrapper>
        <section className="py-16">
        <h1 className=" text-purple-700 font-extrabold text-4xl lg:text-5xl">Common In All</h1>
        <h1 className="text-zinc-800 font-extrabold text-5xl lg:text-6xl mb-8">Specializations</h1>
        <p className="text-neutral-700 text-lg mt-8 max-w-screen-sm mb-8">Before going forward everyone has to complete three complusory quarters</p>
          <h2 className="text-3xl font-bold mb-4">Web 3.0 Course</h2>
          <p className="text-lg mb-4">
            In this course, we will learn about the basics of Web 3.0, decentralized applications, blockchain technology, and smart contracts.
          </p>
          <ul className="pl-8">
            <li>Introduction to Blockchain</li>
            <li>Smart Contracts Development</li>
            <li>Decentralized Web and its Architecture</li>
            <li>Interacting with Blockchain using Web3.js</li>
          </ul>
          <a href="https://portal.piaic.org/signup" target="blank"> 
          <div className="mt-6">
              <Button text={"Sign Up"} />
            </div>
          </a>
        </section>
      </Wrapper>
    </div>
  );
};

export default Web3;
