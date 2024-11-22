// app/courses/cloud/page.tsx
import Button from "@/components/shared/Button";
import Wrapper from "@/components/shared/Wrapper";

const Cloud = () => {
  return (
    <div className="bg-gray-200">
      <Wrapper>
        <section className="py-16">
          <h1 className="text-purple-700 font-extrabold text-4xl lg:text-5xl">Common In All</h1>
          <h1 className="text-zinc-800 font-extrabold text-5xl lg:text-6xl mb-8">Specializations</h1>
          <p className="text-neutral-700 text-lg mt-8 max-w-screen-sm mb-8">
            Before going forward everyone has to complete three compulsory quarters.
          </p>
          <h2 className="text-3xl font-bold mb-4">Cloud Computing Course</h2>
          <p className="text-lg mb-4">
            This course covers the essential principles of cloud computing, including architecture, deployment models, and services like AWS, Azure, and Google Cloud.
          </p>
          <ul className="list-disc pl-8">
            <li>Introduction to Cloud Computing and its Benefits</li>
            <li>Working with AWS, Azure, and Google Cloud</li>
            <li>Virtualization and Containerization Technologies</li>
            <li>Cloud Security and Best Practices</li>
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

export default Cloud;
