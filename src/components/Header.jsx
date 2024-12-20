import React from "react";
import { Button } from "./ui/button";
import { Plus, RefreshCcw, Search } from "lucide-react";
import { Input } from "./ui/input";

const Header = ({ current }) => {
  return (
    <div className="lg:h-[156px] border p-4 rounded-t-xl">
      <section className="flex flex-col md:flex-row justify-between md:items-center ">
        <div className='gap-[4px] flex flex-col'>
          <h1 className="text-[#181D27] text-2xl font-semibold">Repositories</h1>
          <p className="text-sm font-normal text-[#414651]">
            33 total repositories
          </p>
        </div>
        <div className="flex flex-col mt-3 md:mt-0 sm:flex-row sm:items-center gap-3 md:gap-5">
          <Button className="hover:bg-inherit bg-inherit text-[#414651] shadow-none text-sm rounded-[8px] flex gap-3 items-center border border-[#D5D7DA] w-[127px] h-10">
            <RefreshCcw /> <h1>Refresh All</h1>
          </Button>
          <Button className="hover:bg-[#1570EF] bg-[#1570EF] text-[#FFFFFF] shadow-none rounded-[8px] flex gap-3 items-center border text-sm border-[#D5D7DA] w-[158px] h-10">
            <Plus /> <h1>Add Repository</h1>
          </Button>
        </div>
      </section>
      <div className="relative mt-5">
        <Input 
        type='text'
        placeholder='Search Repositories'
        className='max-w-[366px] w-full border text-[#181D27] rounded-[8px] pr-10 placeholder:text-[16px] font-normal text-lg h-11 pl-12 border-[#D5D7DA]'
        />
        <div className="absolute inset-3 text-[#414651]">
            <Search size={20}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
