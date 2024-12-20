
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Plus} from "lucide-react";
  

const SelectNav = ({className}) => {
  return (
    <Select>
      <SelectTrigger className={`${className} rounded-[8px] h-10`}>
        <SelectValue className="placeholder:text-lg text-lg" placeholder="UtkarshDhairyaPanwar" />
      </SelectTrigger>
      <SelectContent >
        <SelectItem value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</SelectItem>
        <SelectItem value="Mellan"><div className='flex items-center gap-3 font-normal text-gray-800'>My default Project</div></SelectItem>
        <SelectItem  value="add project"><div className='flex items-center gap-3 font-bold text-gray-800'><Plus/> Add New Project</div></SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectNav;
