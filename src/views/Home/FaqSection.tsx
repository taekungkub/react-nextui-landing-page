import React from "react"
import { Accordion, AccordionItem, Avatar, Chip } from "@nextui-org/react"
import { IconBottle, IconCake, IconTeapot } from "@tabler/icons-react"

type Props = {}

export default function FaqSection({}: Props) {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

  return (
    <div className="container mt-20">
      <Chip color="primary" className="px-4 ">
        <div className="font-bold">FAQ</div>
      </Chip>
      <div className="text-2xl font-bold mt-4">Woah, Frequently asked questions here</div>

      <Accordion variant={"splitted"} className="mt-8">
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1" startContent={<IconTeapot className="text-primary" />}>
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2" startContent={<IconCake className="text-primary" />}>
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3" startContent={<IconBottle className="text-primary" />}>
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  )
}
