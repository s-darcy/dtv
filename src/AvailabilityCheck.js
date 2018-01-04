import React, { Component } from 'react';
import AvailabilityCheckResult from './AvailabilityCheckResult';

class AvailabilityCheck extends Component {
	
    render(){

        return (
            <div>

                <section className="search">
                    <div className="row">
                        <div className="columns large-8 large-offset-2 text-center">
                            <i className="search__map-marker  fa fa-map-marker" aria-hidden="true"></i>
                            <input className="search__input-text" type="text" placeholder="Enter street address"/>
                            <input 
                                className="search__input-button"
                                type="button" 
                                value="Check availability" 
                                onClick={(event) => {this.props.availabilityClick(event)}}
                            />
                        </div>
                    </div>          
                </section>
                
            </div>    
        );
    }     
}  
export default AvailabilityCheck; 