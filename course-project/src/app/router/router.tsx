import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },

  {
    path: '/community',
    element: <div>Community</div>,
  },

  {
    path: '/:alias',
    element: <div>Category</div>,
  },

  {
    path: '/article',
    children: [{ path: ':alias', element: <div>Article</div> }],
  },

  {
    path: '/profile',
    children: [
      { index: true, element: <div>Profile</div> },
      { path: 'edit', element: <div>Edit Profile</div> },
    ],
  },
])
