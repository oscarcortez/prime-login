import { FunctionComponent, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.css'

export const AuthLayout: FunctionComponent = (): ReactNode => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  )
}
