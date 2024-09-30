import { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/react.svg'
import { PATHS_HOME } from 'Home/routes'
import styles from './headerLayout.module.scss'

const HeaderLayout: FC = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.headerLogo} to={PATHS_HOME.HOME}>
        <img src={logo} />
      </Link>
    </header>
  )
}

export default HeaderLayout
