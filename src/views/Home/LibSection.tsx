import { Icon123, IconBrandNextjs, IconBrandTailwind, IconExternalLink, IconLighter, IconNotification, IconThumbDown } from "@tabler/icons-react"
import React from "react"
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image, Link } from "@nextui-org/react"

type Props = {}

export default function LibSection({}: Props) {
  const items = [
    {
      id: 1,
      title: "NextUI",
      desc: "Make beautiful websites regardless",
      icon: IconBrandNextjs,
    },
    {
      id: 2,
      title: "Tailwind",
      desc: "A utility-first CSS framework",
      icon: IconBrandTailwind,
    },
    {
      id: 3,
      title: "Mantine hooks",
      desc: "Validation with mantine hook forms and zod validate",
      icon: IconLighter,
    },
    {
      id: 4,
      title: "React hot toast",
      desc: "The Best Toast in Town. Smoking hot React notifications.",
      icon: IconNotification,
    },
  ]

  const CardList = items.map((v) => {
    return (
      <div key={v.id}>
        <Card className="h-full">
          <CardHeader className="flex justify-between gap-3">
            <div className="flex gap-3 items-center">
              <Button isIconOnly radius={"full"} color="primary" variant={"flat"}>
                <v.icon />
              </Button>
              <div className="flex flex-col">
                <p className="text-md font-bold">{v.title}</p>
              </div>
            </div>

            <p className="text-small text-default-500">
              <Link underline={"hover"} color={"primary"}>
                <IconExternalLink size={"1rem"} className="mr-1" />
              </Link>
            </p>
          </CardHeader>
          <CardBody>
            <div className="text-md">{v.title}</div>
            <p className="mt-2">{v.desc}</p>
          </CardBody>
        </Card>
      </div>
    )
  })

  return (
    <div className="mt-20 bg-gray-100 dark:bg-transparent py-20">
      <div className="container">
        <div className="text-center">
          <div className="text-2xl font-bold">Library</div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-4">{CardList}</div>
        </div>
      </div>
    </div>
  )
}
