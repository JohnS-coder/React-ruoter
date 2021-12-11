import React from 'react'
import { NavLink } from 'react-router-dom'

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink className={(navData)=>navData.isActive ? 'className' : ''} to='/welcome'>
                            Welcome
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData)=>navData.isActive ? 'className' : ''} to='/products'>
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
