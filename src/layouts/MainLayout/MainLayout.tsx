import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderLayout from 'layouts/MainLayout/components/HeaderLayout'

import styles from './mainLayout.module.scss'

const MainLayout: FC = () => {
  return (
    <section className={styles.container}>
      <main className={styles.content}>
        <HeaderLayout />
        <section className={styles.mainContent}>
          <Outlet />
        </section>
      </main>
    </section>
  )
}

export default MainLayout
