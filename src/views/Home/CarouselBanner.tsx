import { Carousel } from "@mantine/carousel"
import { Card, CardBody } from "@nextui-org/react"
import React from "react"

type Props = {}

export default function CarouselBanner({}: Props) {
  const items = [
    {
      id: 1,
      title: "This is a title",
      desc: "Something",
    },
    {
      id: 2,
      title: "This is a title",
      desc: "Something",
    },
    {
      id: 3,
      title: "This is a title",
      desc: "Something",
    },
    {
      id: 4,
      title: "This is a title",
      desc: "Something",
    },
    {
      id: 5,
      title: "This is a title",
      desc: "Something",
    },
    {
      id: 6,
      title: "This is a title",
      desc: "Something",
    },
  ]

  const slideList = items.map((v) => {
    return (
      <Carousel.Slide key={v.id} className="flex flex-col items-center justify-center pb-10 px-4 ">
        <Card shadow={"sm"} className="bg-primary">
          <CardBody>
            <div className="text-2xl">{v.id}</div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum sint eum vero laboriosam doloremque unde maiores, velit consequatur harum, aperiam
            voluptatibus temporibus aliquam tempore eos quis quo? Sit, iusto.
          </CardBody>
        </Card>
      </Carousel.Slide>
    )
  })
  return (
    <div className="container my-20">
      <div className="text-center">
        <div className="text-2xl font-bold">Explain something in this mantine carousel </div>
        <div>You can insert images or some texts if you need.</div>

        <div>
          <Carousel
            withIndicators
            slideSize="33.33%"
            slideGap="md"
            loop
            align="start"
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: 15 },
            ]}
            classNames={{
              control: "bg-white",
              indicator: "bg-primary",
            }}
            className="mt-4"
          >
            {slideList}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
