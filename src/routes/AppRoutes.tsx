import { Route, Routes } from 'react-router-dom'
import CartContainer from '../containers/CartContainer'
import HeaderContainer from '../containers/HeaderContainer'
import HomeContainer from '../containers/HomeContainer'

export const AppRoutes = () => {
    return (
        <>
            <HeaderContainer />
            <Routes>
                <Route element={<HomeContainer />} path='/' />
                <Route element={<HomeContainer />} path='/home' />
                <Route element={<CartContainer />} path='/cart' />
            </Routes>
        </>
    )
}
