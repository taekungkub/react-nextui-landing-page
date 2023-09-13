import { Button } from "@nextui-org/react"
import React from "react"
import styled from "styled-components"

type Props = {}

const ImageContainer = styled.div`
  position: relative;
  display: flex;

  @media (min-width: 960px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transform: translate(-32px, -32px);
  }
`

const ImaegBg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  width: 192px;
  height: 192px;
  background-image: linear-gradient(15deg, var(--c-yellow-light) 65%, var(--c-green-light) 30%);
  filter: blur(72px);
  transform: translate(-50%, -50%);

  @media (min-width: 640px) {
    width: 256px;
    height: 256px;
  }

  @media (min-width: 960px) {
    width: 320px;
    height: 320px;
  }
`

export default function HeroSection({}: Props) {
  return (
    <div className="grid items-center pt-[120px] sm:pt-[150px] pb-8 lg:h-screen">
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-4">
          <div className="order-2 sm:order-1">
            <div className=" tracking-tight inline font-semibold from-primary  to-warning dark:from-[#5EA2EF]  dark:to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
              React NextUI
            </div>
            <p className="text-base lg:text-xl mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae impedit reprehenderit quaerat. Temporibus accusamus asperiores, nisi ipsam vel
              quae cumque quod veniam molestias commodi eos nulla delectus aperiam voluptate!
            </p>
            <div className="flex gap-4 mt-4 ">
              <Button color="primary">Get Started</Button>
              <Button color="primary" variant={"flat"}>
                View in github
              </Button>
            </div>
          </div>
          <div className="order-1 sm:order-2 ">
            <ImageContainer>
              <ImaegBg> </ImaegBg>
              {/* <div className="z-[1]   mx-auto rounded-full bg-yellow-300 h-32 w-32 grid items-center justify-center">
                <div className="text-3xl">N</div>
              </div> */}
              <img src="https://pinia.vuejs.org/logo.svg" className="w-full block mx-auto max-w-[130px] z-[1]" alt="" />
            </ImageContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
