import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

const Home: FC = () => {
  const { t } = useTranslation('features', { keyPrefix: 'Home' })
  return (
    <div>
      <h1>{t('welcome')}</h1>
    </div>
  )
}

export default Home
