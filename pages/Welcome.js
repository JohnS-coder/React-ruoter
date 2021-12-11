import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

const Welcome = () => {
    return (
        <section>
            <h1>The Welcome Page</h1>
            <Link to='newuser'>New User</Link>
            {/* <Routes>
                <Route path='new-user' element={<p>Welcome, new user!</p>}/>  //welcome gerekmiyor.Relative path,  p tag görünmez
            </Routes> */}
            <Outlet/>
        </section>
    )
}

export default Welcome
