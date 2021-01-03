import React from 'react'

import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

export default function ProductCard () {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
                <div className="product__card">
                    <Link to="">
                        <img src="/images/produk.png" />
                    </Link>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <div className="product__card">
                    <Link to="">
                        <img src="/images/produk.png" />
                    </Link>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <div className="product__card">
                    <Link to="">
                        <img src="/images/produk.png" />
                    </Link>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <div className="product__card">
                    <Link to="">
                        <img src="/images/produk.png" />
                    </Link>
                </div>
            </Grid>
        </Grid>
    )
}