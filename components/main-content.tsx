import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import ColorSelecter from "./custome/color-selecter"
import CarouselThumbs from "./custome/carousel-thumbs"

const MainContent = () => {
  return (
    <div className="p-12 pl-0 flex">
      <div className="w-2/3 max-h-max px-24 bg-[#FBFCFE]">
        <CarouselThumbs />
      </div>
      <div className="w-1/3 flex flex-col justify-start pl-12 py-16 gap-6">
        <div>
          <Badge className="mb-3 bg-[#00F3B9] text-[#0036C3]">NEW</Badge>
          <h2 className="text-3xl font-bold mb-3">2021 Tesla Model 3</h2>
          <p className="mb-3"><span className="opacity-40 mr-4">VIN</span>JN1AZ0CPOBT009448</p>
          <div className="flex gap-1 ">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" key={index}>
                <path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#FFB400" />
              </svg>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-semibold">$41,103</h3>
        <hr />

        <div>
          <h4 className="font-bold mb-6">Color</h4>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <ColorSelecter color="#030303" />
              <ColorSelecter color="#D43A55" />
              <ColorSelecter color="#0036C3" />
              <ColorSelecter color="#FFFFFF" border="#E0E0E0" selected />
            </div>
            <p className="text-xs font-bold">SILVER</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mt-10">
          <Button className="w-full bg-[#0036C3] text-[#00F3B9] hover:bg-[#000dc3]">Order Now</Button>
          <p className="opacity-40">Estimated within 16 Aug - 23 Aug</p>
        </div>

        <h3 className="text-2xl mt-12 font-semibold">{"Tesla believes in accelerating the world's transition to sustainable energy with electric cars."}</h3>

        <Link className="text-[#0036C3] underline" href="#">View the Tesla collection</Link>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-t border-b-0">
            <AccordionTrigger className="font-semibold">Description</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-t border-b-0">
            <AccordionTrigger className="font-semibold">Product Highlights</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-t border-b-0">
            <AccordionTrigger className="font-semibold">Delivery & Warranty</AccordionTrigger>
            <AccordionContent>
              {"Yes. It's animated by default, but you can disable it if you prefer."}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default MainContent