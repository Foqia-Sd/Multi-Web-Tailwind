import Button from "@/components/shared/Button";
import Wrapper from "@/components/shared/Wrapper";

const AI = () => {
  return (
    <div className="bg-gray-200">
      <Wrapper>
        <section className="py-16">
          <h1 className="text-purple-700 font-extrabold text-4xl lg:text-5xl">Common In All</h1>
          <h1 className="text-zinc-800 font-extrabold text-5xl lg:text-6xl mb-8">Specializations</h1>
          <p className="text-neutral-700 text-lg mt-8 max-w-screen-sm mb-8">
            Before going forward everyone has to complete three compulsory quarters.
          </p>
          <h2 className="text-3xl font-bold mb-4">Artificial Intelligence (AI) Course</h2>
          <p className="text-lg mb-4">
            This course focuses on equipping students with the foundational and advanced concepts of Artificial Intelligence, including machine learning, deep learning, and data processing.
          </p>
          <ul className="list-disc pl-8">
            <li>Introduction to AI and Machine Learning</li>
            <li>Building Neural Networks with TensorFlow and PyTorch</li>
            <li>Natural Language Processing (NLP) Applications</li>
            <li>AI Ethics and Future Trends</li>
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

export default AI;
