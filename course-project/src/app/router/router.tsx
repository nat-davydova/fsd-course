import { createBrowserRouter } from 'react-router'

import { ArticlePage } from '../../pages/article/'
import { CategoryPage } from '../../pages/category'
import { CommunityPage } from '../../pages/community'
import { MainPage } from '../../pages/main'
import { EditUserPage } from '../../pages/user/edit'
import { UserPage } from '../../pages/user/profile'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainPage,
  },

  {
    path: '/community',
    Component: CommunityPage,
  },

  {
    path: '/:alias',
    Component: CategoryPage,
  },

  {
    path: '/article',
    children: [{ path: ':alias', Component: ArticlePage }],
  },

  {
    path: '/user',
    children: [
      { index: true, Component: UserPage },
      { path: 'edit', Component: EditUserPage },
    ],
  },
])
