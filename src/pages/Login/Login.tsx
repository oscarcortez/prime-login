import { FunctionComponent, ReactNode } from 'react'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import { Link } from 'react-router-dom'
// type Props = {}
import { useFormik } from 'formik'

export const Login: FunctionComponent = (): ReactNode => {
  const bottomLeftLink = (
    <Link to="/forgot-password" className="text-gray-500 hover:underline">
      Forgot Password?
    </Link>
  )

  const bottomRightLink = (
    <Link to="/register" className="text-sky-600 hover:underline ml-4">
      Create an account
    </Link>
  )

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <LoginForm
      title="Log In"
      formik={formik}
      bottomLeftLink={bottomLeftLink}
      bottomRightLink={bottomRightLink}
    />
  )
}
