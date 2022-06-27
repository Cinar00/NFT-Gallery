import React from 'react'
import "../Image List/imageList.css"
import { ReactComponent as YourSvg } from '../../assets/binance-coin-bnb.svg';



const imageList = (props) => {


        return (
            <div className='row'>

                {props.products.map((product) => (

                    <div className="col-sm-12 " key={product.id}>
                        <div style={{backgroundColor: "#e67d0d", border: "none", borderRadius: "20px", boxShadow: "16px 16px 16px 4px rgba(0,0,0,0.5)" }} className='card mb-4 shadow-sm mx-auto'>
                            <img style={{boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)", borderRadius: "20px 20px 0 0"}} src={product.image} alt="nft" className='card-img-top' />
                            <div style={{border: "none"}} className='card-body'>
                                <h5 style={{textShadow: "1px 1px 2px blue"}} className='card-title text-center text-success '>{product.title}</h5>
                                <div style={{border: "none"}} className='d-flex justify-content-between align-items-center'>
                                    <button style={{backgroundColor: "#239fd8", color: "#fff"}} className="btn btn-sm fw-bold" type="button" value="Buy">Buy</button>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <h5>
                                            <span className="px-2"><YourSvg width={"26px"}/> {product.price}</span>
                                            <span className="badge bg-warning">{product.currency}</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        )
}




export default imageList