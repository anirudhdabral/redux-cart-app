import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductWithCount } from '../models/ProductWithCount '
type Props = {
    data: ProductWithCount[]
}
export const Header = (props: Props) => {
    const [cartCount, setCartCount] = useState(0)
    useEffect(() => {
        const productList = props.data
        let count = 0
        for (const product of productList) {
            count += product.count;
        }
        setCartCount(count)
    }, [props.data])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand h1" >Redux Cart App</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>
                                <Link className='nav-link active mb-1' to="/home">Home</Link>
                            </li>
                        </ul>
                        <Link to="/cart" className='btn position-relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                            <span className="position-absolute mt-1 top-1 start-70 translate-middle badge rounded-pill bg-danger">
                                {cartCount < 10 ? cartCount : '9+'}<span className="visually-hidden">unread messages</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
