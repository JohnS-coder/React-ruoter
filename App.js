import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'

const App = () => {
    return (
        <div>
            <MainHeader/>
            <main>
                <Routes>
                    <Route path='/' element={<Navigate to='/welcome'/>} />
                    <Route path='/welcome/*' element={<Welcome/>}>
                        {/* <Route path='new-user' element={<p>Welcome, new user!</p>}/>  */}
                    </Route>
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/products/:productId' element={<ProductDetail/>}/>

                </Routes>
            </main>
        </div>
    )
}

export default App
