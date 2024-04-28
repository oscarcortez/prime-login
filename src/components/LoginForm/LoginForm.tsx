import { FunctionComponent, ReactElement, ReactNode } from 'react'
import { FormikProps } from 'formik'

import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { NoAuthFormContainer } from '../NoAuthFormContainer/NoAuthFormContainer'

type FormValues = {
  email: string
  password: string
}

type LoginFormProps<> = {
  title: string
  formik: FormikProps<FormValues>
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
        <span className="p-float-label">
          <InputText
            type="text"
            id="email"
            className="w-full"
            {...formik.getFieldProps('email')}
          />
          <label htmlFor="email">Email</label>
        </span>

        <span className="p-float-label">
          <Password
            id="password"
            className="[&>input]:w-full w-full"
            // toggleMask
            {...formik.getFieldProps('password')}
          />
          <label htmlFor="password">Password</label>
        </span>
        <Button type="submit" label="Login" className="w-full" />
      </NoAuthFormContainer>
    </>
  )
}
