import { Button } from "@nextui-org/react"
import React from "react"

type Props = {}

export default function SectionOne({}: Props) {
  return (
    <div className="bg-gray-100 dark:bg-transparent py-20">
      <div className="container mt-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2  items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold"> You can put whatever you want here</h2>
            <h5 className="text-base">
              Dennis Farina was one of Hollywood's busiest actors and a familiar face to moviegoers and television viewers alike. In 1998's "Saving Private Ryan,"
              directed by Steven Spielberg, Farina played "Col. Anderson," a pivotal role in the film.
            </h5>
            <Button color="primary" className="mt-4" variant={"flat"}>
              Check in out
            </Button>
          </div>
          <div>
            <img src="https://mantinetemplate.netlify.app/static/media/lime-surfing.8ef8682684832594f090.png" className="w-full block mx-auto max-w-[400px]" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <div className="sm:order-2">
            <h2 className="text-2xl font-bold"> Put something here too</h2>
            <h5 className="text-base">
              Dennis Farina is unique among thespians in that he was one of the few to achieve success as a "late-bloomer." He did not start acting until he was 37 years
              old, after stints in the military and 18 years on the Chicago Police Department.
            </h5>
            <Button color="primary" className="mt-4" variant={"flat"}>
              More
            </Button>
          </div>
          <div className="sm:order-1">
            <img
              src="https://mantinetemplate.netlify.app/static/media/lime-bicycle-riding.b6b8368f8cf9b17c988c.png"
              className="w-full block mx-auto max-w-[400px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
