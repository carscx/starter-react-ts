import { lazy } from 'react'
import Loadable from 'components/Loadable'

export const PATHS_HOME = {
  HOME: '',
}

const Home = Loadable(lazy(async () => await import('Home/screens/Home')))

const HomeRoutes = [{ path: PATHS_HOME.HOME, element: <Home /> }]

export default HomeRoutes
