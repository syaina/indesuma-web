import React from 'react'

import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

import ProductCard from '../ProductCard/ProductCard'

export default function ProductSection (props) {
    return (
        <div className="container">
            <div className="product-header">
                <h3 className="product__title font--uppercase">{ props.title }</h3>
                <a href="" className="font--uppercase font--small a-see-all">Lihat Semua</a>
            </div>
            <div className="mx-2">
                <ProductCard/>
            </div> 
        </div>
    )
}