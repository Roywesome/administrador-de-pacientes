import React from 'react'
import {Outlet} from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
        <h1></h1>

        <Outlet />
    </div>

  )
}

export default AuthLayout