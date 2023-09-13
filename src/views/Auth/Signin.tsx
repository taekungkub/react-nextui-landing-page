import React from "react"
import { Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader } from "@nextui-org/react"
import { IconEye } from "@tabler/icons-react"
import { useForm } from "@mantine/form"
import { Navigate, useLocation, useNavigate, useRoutes } from "react-router-dom"

type Props = {}

export default function Signin({}: Props) {
  let location = useLocation()
  const navigate = useNavigate()
  const [selected, setSelected] = React.useState(location.pathname === "/signup" ? "sign-up" : "login")

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (!value ? "password empty" : null),
    },
  })

  return (
    <div className="container">
      <div className="flex flex-col w-full items-center">
        <Card className="max-w-full w-[500px] ">
          <CardBody className="overflow-hidden">
            <Tabs fullWidth size="lg" aria-label="Tabs form" selectedKey={selected} onSelectionChange={(value: React.Key) => setSelected(value as string)}>
              <Tab key="login" title="Login" onClick={() => navigate("/signin")}>
                <form className="flex flex-col gap-4" onSubmit={form.onSubmit((values) => console.log(values))}>
                  <Input label="Email" placeholder="Enter your email" type="text" {...form.getInputProps("email")} errorMessage={form.errors.email} />
                  <Input
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    endContent={<IconEye />}
                    {...form.getInputProps("password")}
                    errorMessage={form.errors.password}
                  />
                  <p className="text-center text-small">
                    Need to create an account?{" "}
                    <Link size="sm" onPress={() => setSelected("sign-up")}>
                      Sign up
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth color="primary" type={"submit"}>
                      Login
                    </Button>
                  </div>
                </form>
              </Tab>
              <Tab key="sign-up" title="Sign up" onClick={() => navigate("/signup")}>
                <form className="flex flex-col gap-4 h-[300px]">
                  <Input isRequired label="Name" placeholder="Enter your name" type="password" />
                  <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                  <Input isRequired label="Password" placeholder="Enter your password" type="password" />
                  <p className="text-center text-small">
                    Already have an account?{" "}
                    <Link size="sm" onPress={() => setSelected("login")}>
                      Login
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth color="primary">
                      Sign up
                    </Button>
                  </div>
                </form>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
