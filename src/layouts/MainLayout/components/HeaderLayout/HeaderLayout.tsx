import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from 'assets/react.svg'
import { ArrowLeftIcon } from 'components/Icons'
import { PATHS_HOME } from 'Home/routes'
import styles from './headerLayout.module.scss'

const HeaderLayout: FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <header className={styles.header}>
        <Link className={styles.headerLogo} to={PATHS_HOME.HOME}>
          <img src={logo} />
        </Link>
      </header>
      <div className={styles.headerNav}>
        <Link
          to={'..'}
          onClick={(e) => {
            e.preventDefault()
            navigate(-1)
          }}
          className={styles.backButton}
        >
          <ArrowLeftIcon />
        </Link>
      </div>
    </>
  )
}

export default HeaderLayout
