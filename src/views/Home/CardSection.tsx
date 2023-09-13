import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Image } from "@nextui-org/react"
import React from "react"

export default function SectionTwo() {
  const items = [
    {
      id: 1,
      title: "History of Dennis Farina",
      badge: "COOL BADGE",
      desc: "Discover the career of Dennis Farina and his roles in movies!",
      img: "https://mantinetemplate.netlify.app/static/media/lime-welcome.afea1cddee919807264f.png",
    },
    {
      id: 2,
      title: "Career of Dennis Farina",
      badge: "COOL BADGE",
      desc: "Discover the career of Dennis Farina and his roles in movies!",
      img: "https://mantinetemplate.netlify.app/static/media/lime-canoeing.ecccfc6244b9cf476e85.png",
    },
    {
      id: 3,
      title: "Major roles of Dennis Farina",
      badge: "COOL BADGE",
      desc: "Discover the career of Dennis Farina and his roles in movies!",
      img: "https://mantinetemplate.netlify.app/static/media/lime-message-sent.35d0c58f5254a31a2c4c.png",
    },
  ]

  const CardList = items.map((v) => {
    return (
      <div key={v.id}>
        <Card isPressable>
          <CardHeader>
            <div className="block mx-auto">
              <Image alt="Card background" className="w-full  object-cover max-w-[270px]" src={v.img} />
            </div>
          </CardHeader>
          <CardBody>
            <div className="text-md">{v.title}</div>

            <Chip color="primary" className="mt-2" variant={"flat"}>
              {v.badge}
            </Chip>
            <p className="mt-2">{v.desc}</p>
          </CardBody>
          <CardFooter>
            <Button fullWidth color={"primary"} variant={"solid"}>
              Let do it's
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  })
  return (
    <div className="container mt-14">
      <div className="text-2xl font-bold text-center">These cards are really nice</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-4">{CardList}</div>
    </div>
  )
}
