import { ReactElement } from 'react'
import styles from './index.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Partners({
  className
}: {
  extended?: boolean
  className?: string
}): ReactElement {
  const partners = require
    .context('../../../../public/images/partners', false, /\.(png|jpe?g)$/)
    .keys()
    .filter((e) => e.startsWith('./'))
    .map((x) => x.replace('./', ''))

  return (
    <>
      <h2 className={styles.title}>Launch partners</h2>
      <div
        className={cx({
          container: true,
          [className]: className
        })}
      >
        {partners?.map((logo) => (
          <img
            className={styles.logo}
            key={logo}
            src={`/images/partners/${logo}`}
          />
        ))}
      </div>
    </>
  )
}
