import { ArrowUp } from "lucide-react";

const Card2 = () => {
  return (
    <div className="p-6 w-[265px] h-[164px] rounded-[24px] border shadow-2xl bg-white">
      <div className="flex items-center justify-between">
        <div>
          <img src="/Group 4.png" alt="Statistics Graph" className="w-auto h-auto" />
        </div>
        <div>
          <h2 className="text-[#0049C6] flex items-center gap-1 font-bold">
            <ArrowUp size={20} /> 14%
          </h2>
          <p className="text-xs text-[#171717]">This week</p>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <h3 className="text-sm font-bold text-[#171717]">Issues Fixed</h3>
        <p className="font-bold text-3xl text-[#081735]">500K+</p>
      </div>
    </div>
  );
};

export default Card2;
