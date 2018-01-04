import React, { Component } from 'react';
import Bundles from './Bundles';
import BundlesAvailability from './BundlesAvailability';

class HomeTV extends Component {
	
    render(){

        return (
            <div>

                <section className="tv-includes  text-center">
                    <div className="row">
                        <div className="columns large-4">
                            <img className="tv-includes__tv-icon" alt="TV icon" src="/img/TV-icon.svg" />
                            <p className="tv-includes__title">PREMIUM CHANNELS</p>
                            <p className="tv-includes__details">Includes HBO®, STARZ®, SHOWTIME®, and CINEMAX® for the first 3 months at no extra charge.</p>
                            <p className="tv-includes__premium-channels--package">With SELECT through ULTIMATE Pkgs. After 3 mos., services continue at then prevailing rate  (currently $53.99/mo.) unless you call to change or cancel. Req’s you to select offer.</p>
                        </div>
                        <div className="columns large-4">
                            <img className="tv-includes__tv-and-remote-icon" alt="TV and remote icon" src="/img/TV-and-remote.svg"/>
                            <p className="tv-includes__title">NEVER MISS A SHOW</p>
                            <p className="tv-includes__details">Enjoy Genie. Our most advanced DVR ever.</p>
                        </div> 
                        <div className="columns large-4">
                            <img className="tv-includes__dvr-icon" alt="Whole home DVR icon" src="/img/DVR-4.svg" />
                            <p className="tv-includes__title">MONTHLY EQUIPMENT FEES FOR UP TO 4 ROOMS INCLUDED</p>
                            <p className="tv-includes__details">With DIRECTV there’s no equipment to buy.</p>
                        </div>   
                    </div>  
                </section> 

                <section className="shop">
                    <div className="row">
                        <div className="columns large-9">
                            <h2 className="shop__pitch">Get your entertainment on more devices.</h2>
                        </div>
                        <div className="columns large-3">
                            <button className="shop__button shop__shop-bundles" onClick={(event) => {this.props.bundlesClick(event)}}>Shop bundles</button>
                        </div>
                    </div>  
                </section>
                
            </div>    
        );
    }     
}  
export default HomeTV;  