import { useForm, zodResolver } from "@mantine/form"
import { Button, Input, Textarea } from "@nextui-org/react"
import { motion } from "framer-motion"
import { useState } from "react"
import toast from "react-hot-toast"
import { z } from "zod"

type Props = {}

export default function ContractSection({}: Props) {
  const [IsLoading, setIsLoading] = useState(false)
  const schema = z.object({
    email: z.string().nonempty({ message: "Email cant empty" }).email({ message: "Invalid email" }),
    title: z.string().nonempty({ message: "Title cant empty" }),
    description: z.string().nonempty({ message: "Description cant empty" }),
  })

  const form = useForm({
    initialValues: {
      email: "",
      title: "",
      description: "",
    },
    validate: zodResolver(schema),
  })

  function hanleSubmit() {
    console.log(form.values)
    const toastId = toast.loading("Loading...")
    setIsLoading(true)
    setTimeout(() => {
      toast.success(`OK i got you ${form.values.email}`)
      toast.dismiss(toastId)
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="container my-20">
      <div className="grid grid-cols-1 sm:grid-cols-1">
        <div className="text-center">
          <div className="text-2xl font-bold">Contact us</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dignissimos vitae. Omnis, corporis dolorem! Ab est eveniet necessitatibus porro, mollitia
            animi! Aut sunt rerum cupiditate sit commodi! Ipsa, architecto est?
          </p>
        </div>
        <div className="mt-8">
          <form onSubmit={form.onSubmit((values) => hanleSubmit())}>
            <div className="flex flex-col gap-4 ">
              <Input type="email" label="Email" {...form.getInputProps("email")} errorMessage={form.errors.email} />
              <Input type="text" label="Title" {...form.getInputProps("title")} errorMessage={form.errors.title} />
              <Textarea label="Description" placeholder="Enter your description" {...form.getInputProps("description")} errorMessage={form.errors.description} />
            </div>

            <motion.button initial={{ opacity: 0.6 }} whileTap={{ scale: 0.9 }} whileInView={{ opacity: 1 }}>
              <Button type={"submit"} color="primary" className="mt-4" isLoading={IsLoading}>
                Submit
              </Button>
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  )
}
