import { createBrowserRouter } from 'react-router'

import { ArticlePage } from '../../pages/article'
import { CategoryPage } from '../../pages/category'
import { CommunityPage } from '../../pages/community'
import { MainPage } from '../../pages/main'
import { EditUserPage } from '../../pages/user/edit'
import { UserPage } from '../../pages/user/profile'
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
      {
        path: 'article/:alias',
        Component: ArticlePage,
      },
      {
        path: 'user',
        children: [
          {
            index: true,
            Component: UserPage,
          },
          {
            path: 'edit',
            Component: EditUserPage,
          },
        ],
      },
      {
        path: ':alias',
        Component: CategoryPage,
      },
    ],
  },
])
