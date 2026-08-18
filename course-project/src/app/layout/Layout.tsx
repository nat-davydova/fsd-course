import { Outlet } from 'react-router'

import { Footer } from '../../widgets'

export const Layout = () => {
  return (
    <div>
      <div>Header</div>
      <Outlet />
      <Footer />
    </div>
  )
}
