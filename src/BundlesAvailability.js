import React, { Component } from 'react';
import AvailabilityCheck from './AvailabilityCheck';
import AvailabilityCheckResult from './AvailabilityCheckResult';

class BundlesAvailability extends Component {

	
    render(){

        let availabilityCheck = <AvailabilityCheck 
            availabilityClick={this.props.availabilityClick}
            availabilityCheckStatus={this.props.availabilityCheck}
            availabilityCheckResultStatus={this.props.availabilityCheckResult}
        />

        let availabilityCheckResult = <AvailabilityCheckResult 
            availabilitySecondAddressClick={this.props.availabilitySecondAddressClick}
            availabilityCheckStatus={this.props.availabilityCheck}
            availabilityCheckResultStatus={this.props.availabilityCheckResult}
        />

        return (
            <div>

                <section className="offer">
                    <div className="row">
                        <div className="columns large-12">
                            <p className="offer__requirements">BUNDLE OFFER REQUIRES 24-MO TV & 12-MO INTERNET AGREEMENTS. ALL OTHER DIRECTV OFFERS REQUIRE 24-MO. AGREEMENT. EARLY TERMINATION FEES ($20/MO. FOR TV; $15/MO. FOR INTERNET) FOR  EACH MONTH REMAINING ON AGMT., $35 ACTIVATION, EQUIPMENT NON-RETURN & ADD’L FEES APPLY.   New approved residential customers only (equipment lease req'd). Credit card req'd (except MA & PA).</p>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="columns large-1 large-offset-5 text-center">
                            <a className="offer__offer-details" href="#">offer details</a>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="columns large-10 large-offset-1 text-center">
                            <h3 className="offer__heading">See if AT&T Internet is available in your area.</h3>
                            <p className="offer__text">AT&T Internet speeds and offers vary by location. Check to see what’s available near you.</p>
                        </div>
                    </div>
                </section>

                {this.props.availabilityCheckStatus && availabilityCheck}
                {this.props.availabilityCheckResultStatus && availabilityCheckResult}


            </div>    
        );
    }     
}  
export default BundlesAvailability;  