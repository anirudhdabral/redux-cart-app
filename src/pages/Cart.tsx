import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ProductWithCount } from '../models/ProductWithCount '
import { AddToCartHandler, EmptyCartHandler, RemoveFromCartHandler } from '../models/Types'

type Props = {
    data: ProductWithCount[],
    addToCartHandler: AddToCartHandler,
    removeFromCartHandler: RemoveFromCartHandler,
    emptyCartHandler: EmptyCartHandler
}

export const Cart = (props: Props) => {
    const [productList, setProductList] = useState<ProductWithCount[]>([])
    const [subTotal, setSubTotal] = useState<number>(0)
    const [totalCount, setTotalCount] = useState<number>(0)
    const [showModal, setShowModal] = useState<boolean>(false)
    const navigate = useNavigate()
    useEffect(() => {
        const products = props.data;
        setProductList(products)
        let sum = 0;
        let count = 0;
        for (const product of products) {
            sum += (product.price * product.count);
            count += product.count;
        }
        setSubTotal(sum)
        setTotalCount(count)
    }, [props.data])

    const handleProceedToBuy = () => {
        props.emptyCartHandler()
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
        navigate('/home')
    }

    return (
        <>
            <div className='m-4 p-2'>
                <h2 className='mb-4'>Cart</h2>
                {productList.length > 0 ? (
                    <div>
                        <ul className="list-group mb-4">
                            {productList.map((product, index) => {
                                return <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <img className='cart-image' src={product.image} alt="" />
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{product.name}</div>
                                        ₹ {new Intl.NumberFormat('en-IN').format(product.price)}
                                    </div>
                                    <div className="input-group" style={{ width: '120px' }}>
                                        <button
                                            onClick={() => props.removeFromCartHandler(product)}
                                            className="btn text-danger" type="button" id="button-addon1" style={{ border: 'none' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
                                            </svg>
                                        </button>
                                        <input type="text" className="form-control" style={{ borderTop: 'none', borderBottom: 'none' }} value={product.count} />
                                        <button
                                            onClick={() => props.addToCartHandler(product)}
                                            disabled={product.count >= 9}
                                            className="btn text-success" type="button" id="button-addon1" style={{ border: 'none' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            })}
                        </ul>
                        <span className='h5'>Sub total: ₹ {new Intl.NumberFormat('en-IN').format(subTotal)}</span>
                        <br />
                        <button className='btn btn-primary mt-3' onClick={handleProceedToBuy}>Proceed to Buy ({totalCount} items)</button>
                    </div>
                ) : (
                    <div className='d-flex justify-content-center'>
                        <h5>Your cart is empty</h5>
                    </div>
                )}
            </div>
            <Modal show={showModal} onHide={handleCloseModal} centered backdrop='static'>
                <Modal.Header closeButton style={{ border: 'none' }}>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center mb-5">
                        <span style={{ fontSize: 30 }}>Thank you for your purchase!</span>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
