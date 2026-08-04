export const ROUTES = {
  main: '/',
  community: '/community',
  article: (alias: string) => `/article/${alias}`,
  user: {
    index: '/user',
    edit: '/user/edit',
  },
  category: (alias: string) => `/${alias}`,
}
