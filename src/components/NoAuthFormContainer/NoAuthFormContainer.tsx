import { FunctionComponent, ReactElement, ReactNode } from 'react'
import styles from './index.module.css'

type NoAuthFormContainerProps = {
  children: React.ReactNode
  title: string
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  bottomLeftLink?: ReactElement
  bottomRightLink?: ReactElement
}

export const NoAuthFormContainer: FunctionComponent<
  NoAuthFormContainerProps
> = ({
  children,
  title,
  onSubmit,
  bottomLeftLink,
  bottomRightLink
}): ReactNode => {
  return (
    <>
      <div className={styles.form}>
        <div className="mb-10">
          <h1 className={styles.title}>{title}</h1>
        </div>
        <form className="flex flex-col gap-3" action="" onSubmit={onSubmit}>
          {children}
        </form>
        <div className="mt-5 text-center">
          {bottomLeftLink || null}
          {bottomRightLink || null}
        </div>
      </div>
    </>
  )
}
