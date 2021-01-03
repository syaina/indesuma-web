import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import ProductSection from '../components/ProductSection/ProductSection'

import Grid from '@material-ui/core/Grid'

export default function Home () {
    return (
        <Fragment>
            <section>
                <div className="carousel">
                
                </div>
            </section>
            <section>
                <div className="content">
                    <div className="container grid grid-left-right">
                        <div className="grid__left">
                            <div className="home-image-container">
                                <img src="images/logo2.png" alt="Indesuma" />
                            </div>
                        </div>
                        <div className="grid__right">
                            <h2>Tentang</h2> 
                            <h2 className="font--uppercase">Indesuma</h2>
                            <p>Kusuma: (n) bunga; nama tengah Rektor Universitas Padjadjaran yang juga pahlawan nasional indonesia, Iwa Koesoemasoemantri.</p>
            
                            <button className="btn btn--primary mx-2">
                                Lebih lanjut
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container grid grid__reverse grid-left-right">
                        <div className="grid__left">
                            <h2>Apa yang</h2> 
                            <h2 className="font--uppercase">Kami Lakukan</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper mi at elit mattis consectetur. Proin vel euismod lorem, id consequat magna. Sed ac ipsum eget lectus vulputate consequat.</p>
                        </div>
                        <div className="grid__right">
                            <div className="home-image-container">
                                <img src="/images/logo2.png" alt="Indesuma" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="container grid grid-left-right">
                        <div className="grid__left">
                            <h2>Visi</h2> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper mi at elit mattis consectetur. Proin vel euismod lorem, id consequat magna. Sed ac ipsum eget lectus vulputate consequat.</p>
                        </div>

                        <div className="grid__right">
                            <h2>Misi</h2> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper mi at elit mattis consectetur. Proin vel euismod lorem, id consequat magna. Sed ac ipsum eget lectus vulputate consequat.
                                <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper mi at elit mattis consectetur. Proin vel euismod lorem, id consequat magna. Sed ac ipsum eget lectus vulputate consequat.</p>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="container text-align--center">
                        <h2>Nilai <span className="font--uppercase">Indesuma</span></h2>
                        <div className="mx-2">
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <div className="card">
                                    <div className="c-image">
                                        <img src="" alt="" />
                                    </div>
                                    <h3 className="font--terra-cotta">Nilai 1</h3>
                                    <p className="mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper mi at elit mattis consectetur. Proin vel euismod lorem, id consequat magna. </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <div className="card">
                                    <div className="c-image">
                                        <img src="" alt="" />
                                    </div>
                                    <h3 className="font--terra-cotta">Nilai 1</h3>
                                    <p className="mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper mi at elit mattis consectetur. Proin vel euismod lorem, id consequat magna. </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <div className="card">
                                    <div className="c-image">
                                        <img src="" alt="" />
                                    </div>
                                    <h3 className="font--terra-cotta">Nilai 1</h3>
                                    <p className="mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper mi at elit mattis consectetur. Proin vel euismod lorem, id consequat magna. </p>
                                </div>
                            </Grid>
                        </Grid>
                        </div>
                    </div>
                </div>

                <div className="content">
                   <ProductSection title="Infografis Terbaru"/>
                </div>
            </section>
        </Fragment>
    )
}