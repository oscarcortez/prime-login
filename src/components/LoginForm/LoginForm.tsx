import { FunctionComponent, ReactElement, ReactNode } from 'react'
// import { FormikProps } from 'formik'

import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { NoAuthFormContainer } from '../NoAuthFormContainer/NoAuthFormContainer'

// type FormValues = {
//   email: string
//   password: string
// }

type LoginFormProps<> = {
  title: string
  formik: any
  bottomLeftLink?: ReactElement
  bottomRightLink?: ReactElement
}

export const LoginForm: FunctionComponent<LoginFormProps> = ({
  title,
  formik,
  bottomLeftLink,
  bottomRightLink
}): ReactNode => {
  return (
    <>
      <NoAuthFormContainer
        title={title}
        onSubmit={formik.handleSubmit}
        bottomLeftLink={bottomLeftLink}
        bottomRightLink={bottomRightLink}
      >
        <InputText
          type="text"
          id="email"
          //   name="email"
          placeholder="Email"
          className="w-full"
          {...formik.getFieldProps('email')}
        />
        <Password
          id="password"
          //   name="password"
          placeholder="Password"
          className="w-full"
          {...formik.getFieldProps('password')}
        />
        <Button type="submit" label="Login" className="w-full" />
      </NoAuthFormContainer>
    </>
  )
}
