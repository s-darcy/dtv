import React, { Component } from 'react';
import BundlesAvailability from './BundlesAvailability';
import AvailabilityCheck from './AvailabilityCheck';

class AvailabilityCheckResult extends Component {
	
    render(){

        return (
            <div>

                <section className="price">
                    <div className="row">
                        <div className="columns large-6 large-offset-3 text-center">
                            <h4 className="price__starting-at">High Speed Internet from AT&T starting at</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="columns large-2 large-offset-5 text-center">
                            <p className="price__the-rate"><sup className="price__the-rate--superscript">$</sup>30<sup className="price__the-rate--superscript">00</sup></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="columns large-4 large-offset-4">
                            <p className="price__taxes">Plus taxes. 12 mo agmt, other qualifying service & combined bill req’d.* Incl 1TB data/mo. $10 chrg for each add’l 50GB (up to $100/mo.)†</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="columns large-4 large-offset-4 text-center"> 
                            <button className="price__button price__address-check" onClick={(event) => {this.props.availabilitySecondAddressClick(event)}}>
                                Check another address
                            </button>
                        </div>
                    </div>            
                </section>

            </div>    
        );
    }     
}  
export default AvailabilityCheckResult;  