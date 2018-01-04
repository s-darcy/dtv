import React, { Component } from 'react';
import Packages from './Packages';
import PlansAddInternet from './PlansAddInternet';

class Home extends Component {
	
    render(){

        return (
            <div>
                <section className="hero">
                    <div className="row">
                        <div className="columns large-6">
                            <h2 className="hero__heading">All Included DIRECTV Packages</h2>
                            <p className="hero__description">Enjoy TV without the hidden fees. Find the DIRECTV package that’s right for you.</p>
                            <button className="hero__button" onClick={(event) => {this.props.packagesClick(event)}}><a className="hero__button--text" href="#">View packages</a></button>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="columns large-6 large-offset-6 text-center">
                            <p className="hero__movie-subtext">Wonder Woman now playing on DIRECTV CINEMA®</p>
                        </div>  
                    </div>    
                </section>
            </div>
        );
    }     
}  
export default Home;  