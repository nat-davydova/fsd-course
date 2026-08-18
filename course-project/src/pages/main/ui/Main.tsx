import { Link } from 'react-router'

import { ROUTES } from '../../../shared'

export const MainPage = () => {
  return (
    <div>
      <h1>Main</h1>
      <Link to={ROUTES.user.index}>Profile</Link>
    </div>
  )
}
