import { createBrowserRouter } from 'react-router'

import { CommunityPage } from '../../pages/community'
import { MainPage } from '../../pages/main'
import { Layout } from '../layout'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
      {
        path: 'community',
        Component: CommunityPage,
      },
    ],
  },
])
