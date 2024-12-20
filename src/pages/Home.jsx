import { data } from "@/functions/repository_data";
import { Database } from "lucide-react";

function Home() {
  return (
    <div className="">
      <ul className="divide-y divide-gray-200 border rounded-b-xl">
        {data.map((item, idx) => (
          <li 
            key={idx}
            className="p-3 md:p-5 hover:bg-[#F5F5F5] transition-colors"
          >
            <div className="flex items-center gap-2">
              <h1 className="font-medium text-lg md:text-xl">{item.name}</h1>{" "}
              <span className="w-[65px] h-6 rounded-full flex items-center text-xs md:text-sm justify-center border bg-[#EFF8FF] border-[#B2DDFF] text-[#175CD3]">
                {item.status}
              </span>
            </div>
            <div className="my-3 flex gap-5 md:gap-7 items-center">
              <div className="flex items-center gap-2">
                <p className=" text-sm md:text-[16px] text-[#181D27]">{item.lang}</p>
                <div className="h-2 w-2 rounded-full bg-[#1570EF]" />
              </div>
              <div className="flex items-center gap-1">
                <Database size={10.5} />
                <p className=" text-sm md:text-[16px] text-[#181D27]">{item.status}</p>
              </div>
              <div>
                <p className=" text-sm md:text-[16px] text-[#181D27]">{item.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
     
  