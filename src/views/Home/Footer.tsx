import { Button, Card, Chip, Link } from "@nextui-org/react"
import React from "react"

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="p-4 bg-primary py-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold">Simple NextUI + Tailwind template</h2>
            <p className="mt-2">
              You can do anything you want with this template, from portfolios to other stuff. You can find the illustrations I used on
              <Link color={"foreground"} underline="hover" href="https://www.npmjs.com/package/@tabler/icons-react" className="ml-1">
                @tabler/icons-react
              </Link>
            </p>
            <Button color={"default"} variant={"flat"} className="mt-2" as={Link} href="https://nextui.org/">
              See more in NextUI
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
