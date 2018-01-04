import React, { Component } from 'react';

class Pricing extends Component {
	
    render(){

        return (
            <div>

                <section className="cards">
                    <div className="row">
                        <div className="js-slider">
                            <div className="cards_yellow-top">
                            </div>  
                            <div className="cards__green-top">
                            </div>
                            <div className="cards__blue-top">
                            </div> 
                            <div className="card  columns large-4">
                                <div className="row">
                                    <div className="columns large-7 large-offset-1 end">
                                        <h4 className="cards__heading">DIRECTV SELECT™  All Included</h4>
                                    </div>
                                </div>
                                <div className="row">  
                                    <div className="columns large-2 large-offset-1">
                                        <p className="cards__price">$50</p>
                                    </div>
                                    <div className="columns large-2 end">
                                        <p className="cards__fees-and-taxes">PER MO. PLUS TAXES  & RSN Fees.</p>
                                    </div>
                                </div>
                                <div className="row">  
                                    <div className="columns large-10 large-offset-1 end">
                                        <p className="cards__t-and-cs">For 12 Months W/ 24-mo. TV agmt* $90/mo. in months 13-24 (subject to change). Regional sports fee up to $7.29/mo. is extra & applies in certain markets. For SELECT All-Included TV Pkg.</p>
                                    </div>      
                                </div>
                                <div className="row">  
                                    <div className="columns large-4 large-offset-1">
                                        <p className="cards__150-channels">150+ channels</p>
                                    </div>
                                    <div className="columns large-3 large-offset-2 end">
                                        <a className="cards__view-channels" href="#">view channels</a>
                                    </div>       
                                </div>
                                <div className="row">  
                                    <div className="columns large-10 large-offset-1 end">
                                        <ul className="inline-list">  
                                            <li><img className="cards__usa-logo" alt="USA TV Channel logo" src="/img/USA-Network-Logo.svg" /></li>
                                            <li><img className="cards__tbs-logo" alt="TBS TV Channel logo" src="/img/TBS-Logo.svg" /></li>
                                            <li><img className="cards__disney-logo" alt="Disney TV Channel logo" src="/img/Disney-Channel-Logo.svg" /></li>
                                            <li><img className="cards__nick-logo" alt="Nick TV Channel logo" src="/img/Nick-Logo.svg" /></li>
                                        </ul>  
                                    </div>     
                                </div>
                                <div className="row">
                                    <div className="columns large-offset-1 large-10">
                                        <p className="cards__channels">HBO®, SHOWTIME®, CINEMAX® & STARZ®</p>
                                        <p className="cards__3-months">First 3 months at no extra cost</p>
                                        <p className="cards__ultimate-packages">with SELECT™ through ULTIMATE packages. After 3 mos., services continue at then prevailing rate (currently $53.99/mo.) unless you call to change or cancel. Req’s you to select offer.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="columns large-8 text-center">
                                        <button className="cards__call-now-button"><a className="cards__call-now"href="#">Call to order now</a></button>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </section>

            </div>    
        );
    }     
}  
export default Pricing;  