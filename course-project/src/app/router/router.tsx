import { createBrowserRouter } from 'react-router'

import { ArticlePage } from '../../pages/article'
import { CategoryPage } from '../../pages/category'
import { CommunityPage } from '../../pages/community'
import { MainPage } from '../../pages/main'
import { EditUserPage } from '../../pages/user/edit'
import { UserPage } from '../../pages/user/profile'
import { ROUTES } from '../../shared/routes'
import { Layout } from '../layout'

export const router = createBrowserRouter([
  {
    path: ROUTES.main,
    Component: Layout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
      {
        path: ROUTES.community,
        Component: CommunityPage,
      },
      {
        path: ROUTES.article(':alias'),
        Component: ArticlePage,
      },
      {
        path: ROUTES.user.index,
        children: [
          {
            index: true,
            Component: UserPage,
          },
          {
            path: ROUTES.user.edit,
            Component: EditUserPage,
          },
        ],
      },
      {
        path: ROUTES.category(':alias'),
        Component: CategoryPage,
      },
    ],
  },
])
