import React, { useEffect } from "react"

type Props = {}

function piramidHalf() {
  const count = 5

  for (let index = 0; index <= count; index++) {
    console.log("*".repeat(index))
  }
}

function piramidFull() {
  // type 1
  let n = 5
  for (let i = 1; i <= n; i++) {
    const gap = " ".repeat(n - i)
    const star = "$ ".repeat(i)
    console.log(gap + star + gap)
  }

  // type 2
  for (let i = 1; i <= n; i++) {
    var output = ""
    for (let j = 1; j <= n - i; j++) output += " "
    for (let k = 1; k <= i; k++) output += "$ "
    console.log(output)
  }
}

function pyramidTight() {
  let n = 5
  for (let i = 1; i <= n; i++) {
    const gap = " ".repeat(n - i)
    const star = "$".repeat(i * 2 - 1)
    console.log(gap + star + gap)
  }
}

function onCalPow() {
  const num1 = "8"
  const num2 = "3"

  const result2 = Math.pow(Number(num1), Number(num2))
  console.log(result2)
}

function onCalculateGrade() {
  let input = 100
  if (input >= 80 && input <= 100) {
    return "A"
  } else if (input >= 70 && input <= 79) {
    return "B"
  } else if (input >= 60 && input <= 69) {
    return "C"
  } else if (input >= 50 && input <= 59) {
    return "D"
  } else if (input < 50) {
    return "F"
  }
}

function isLeap(year: number) {
  return new Date(year, 1, 29).getDate() === 29
}

function functionName() {
  let n = 5 // row or column count
  // defining an empty string
  let string = ""

  for (let i = 0; i < n; i++) {
    // external loop
    for (let j = 0; j < n; j++) {
      // internal loop
      if (i === 0 || i === n - 1) {
        string += "#"
      } else {
        if (j === 0 || j === n - 1) {
          string += "#"
        } else {
          string += " "
        }
      }
    }
    // newline after each row
    string += "\n"
  }
  /*
  #####
  #   #
  #   #
  #####
  */
  console.log(string)
}

function onTestLab() {}

export default function TestPage({}: Props) {
  useEffect(() => {
    onTestLab()
  }, [])

  return <div className="pt-150">test</div>
}
