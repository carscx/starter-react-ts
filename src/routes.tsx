import { ReactElement } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'

import MainLayout from 'layouts/MainLayout'

import HomeRoutes from 'Home/routes'

const PublicRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [...HomeRoutes],
}

export default function Routes(): ReactElement | null {
  return useRoutes([
    {
      ...PublicRoutes,
    },
    {
      path: '*',
      element: <Navigate to="/404" />,
    },
  ])
}
