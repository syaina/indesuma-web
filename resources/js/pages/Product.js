import React from 'react'
import { Link } from 'react-router-dom'

import ProductSection from '../components/ProductSection/ProductSection'

import Grid from '@material-ui/core/Grid'

export default function Product () {
    return (
        <section>
            <div className="container mx-2">
                <ProductSection title="Infografis Terbaru"/>
                <ProductSection title="#Incast"/>
                <ProductSection title="#Italk"/>
                <ProductSection title="#Insight"/>
            </div>
        </section>
    )
}