import React, { Component } from 'react';

class CustomerService extends Component {
	
    render(){

        return (
            <div>
                <section className="hero-3">
                    <div className="row">
                        <div className="columns large-5">
                            <h2 className="hero-3__heading">Customer Service</h2>
                            <p className="hero-3__sales-agents">Our sales agents are standing by to find you the perfect package.</p>
                            <p className="hero-3__call-to-action">Call to order: </p><a className="hero-3__phone-number--1" href="tel:1-888-444-5555">1-888-444-5555</a>
                            <p className="hero-3__existing-customer">If you are an existing customer and need assistance with your account please call <a className="hero-3__phone-number--2" href="tel:1-800-495-3913">1-800-495-3913</a>.</p>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="hero-3__movie-subtext--parent  columns large-6 large-offset-6 text-center">
                            <p className="hero-3__movie-subtext">King Aurthur: Legend of the Sword now playing on DIRECTV CINEMA®</p>
                        </div>  
                    </div>    
                </section>  
            </div>
        );
    }     
}  
export default CustomerService;    