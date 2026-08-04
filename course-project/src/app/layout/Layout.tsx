import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <div>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </div>
  )
}
