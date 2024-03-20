import { AddToCartHandler } from '../models/Types'
import { products } from '../products'

type Props = {
    addToCartHandler: AddToCartHandler
}

export const Home = (props: Props) => {
    return (
        <>
            <div className='m-4 p-2'>
                <h2 className='mx-2'>Phones</h2>
                <div className='row'>
                    {products.map((product, index) => {
                        return <div className="card col-4 mb-5" style={{ width: '20rem' }} key={index}>
                            <div className='card-image'>
                                <img src={product.image} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <span>₹ {product.price}</span>
                                <button
                                    onClick={
                                        () => props.addToCartHandler(product)
                                    }
                                    className="btn btn-dark w-100 mt-3">Add to cart</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}
