"use client"

import React from "react"
import Image from "next/image"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

const CarouselThumbs = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    api.on("select", () => {
      // Do something on select.
      setSelected(() => api.selectedScrollSnap())
    })
  }, [api])

  return (
    <>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Image src="/car.png" alt="car" width={678} height={387} priority />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center mt-16 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={`flex items-center w-[72px] h-[72px] ${selected === index ? "border rounded-sm border-[#00F3B9]" : "opacity-20"}`}>
            <Image src="/car.png" alt="car" width={678} height={387} />
          </div>
        ))}
      </div>
    </>
  )
}

export default CarouselThumbs