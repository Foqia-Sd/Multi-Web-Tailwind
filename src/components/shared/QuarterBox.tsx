import { FC } from "react";

interface IProps {
  header: string;
  discription: string;
  number: number;
  haveBorder?: boolean;
}

const QuarterBox: FC<IProps> = ({ header, discription, number, haveBorder = true }) => {
  return (
    <div
      className={`border rounded-md flex-1 w-full sm:w-5/12 md:w-4/12 lg:w-3/12 relative flex flex-col justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 hover:scale-105 bg-gradient-to-r from-pink-200 to-gray-300 hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-200 z-20 ${
        haveBorder && "border"
      }`}
    >
      <h4 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">{header}</h4>
      <p className="mt-2 text-slate-800 text-sm sm:text-base md:text-lg">{discription}</p>
      <div className="absolute text-slate-200 -top-8 right-10 text-[100px] sm:text-[130px] md:text-[170px] font-bold -z-10">
        {number}
      </div>
    </div>
  );
};

export default QuarterBox;
