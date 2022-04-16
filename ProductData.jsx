import React, { Component } from 'react'
import Product from './product'
export class ProductData extends Component {
    product = {
        name: "Moto G71 5G (Arctic Blue, 128 GB)  (6 GB RAM)",
        Price: "17500",
        store_name:"Croma",
        del_type: "Free Delivery",
        image: "https://rukminim2.flixcart.com/image/832/832/l1l1rww0/mobile/4/6/z/-original-imagd48znazecap3.jpeg?q=70",

    }
    render(){
        return (
            <div>
                <h6>Product Data</h6>
                <hr/>
                <Product P_Data={this.product} />
            </div>

        )
    }
}

export default ProductData