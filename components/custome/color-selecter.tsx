import { Button } from "../ui/button"

const ColorSelecter = ({ color, border, selected }: { color: string, border?: string, selected?: boolean }) => {
  return (
    <Button
      className={`w-7 h-7 rounded-full p-0 bg-[${color}] 
        ${border ? "border" : ""} border-[${border}] 
        ${selected ? "outline outline-1 outline-offset-4 outline-[#00F3B9]" : ""}
        hover:bg-[${color}]
        hover:outline 
        hover:outline-1 
        hover:outline-offset-4 
        hover:outline-[#00F3B9]`}
    >
    </Button>
  )
}

export default ColorSelecter