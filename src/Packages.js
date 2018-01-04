import React, { Component } from 'react';

class Packages extends Component {
	
    render(){

        return (
            <div>

                <section className="included">
                    <div className="row">
                        <div className="columns large-12 text-center">
                            <h2 className="included__heading">All Included DIRECTV Packages</h2>
                        </div> 
                        <div className="columns large-4 text-center">
                            <hr />
                        </div> 
                        <div className="columns large-4 text-center"> 
                            <h3 className="included__announcement">ALL DIRECTV PACKAGES INCLUDE:</h3>
                        </div>
                        <div className="columns large-4 text-center">
                            <hr />
                        </div> 
                    </div>  
                    <div className="included__bullet-points  row">
                        <div className="  columns large-4">
                            <div className="included__genie-upgrade--section  row">
                                <div className="included__border-color-yellow columns large-2">
                                    <i className="included__check  fa fa-check" aria-hidden="true"></i>
                                </div>
                                <div className="included__border-color-yellow columns large-9 end">
                                    <p className="included__genie-upgrade">Genie® HD DVR Upgrade</p>
                                </div>
                            </div>
                        </div>    
                        <div className="columns large-4">
                            <div className="included__fees--section  row">
                                <div className="included__border-color-green  columns large-2">
                                    <i className="included__check  fa fa-check" aria-hidden="true"></i>
                                </div>
                                <div className="included__border-color-green columns large-9 end">
                                    <p className="included__fees">Monthly equipment fees for up to 4 TVs</p>
                                </div>
                            </div>
                        </div>
                        <div className="columns large-4 end">
                            <div className="included__installation--section  row">
                                <div className="included__border-color-blue  columns large-2">
                                    <i className="included__check  fa fa-check" aria-hidden="true"></i>
                                </div>
                                <div className="included__border-color-blue  columns large-9 end">
                                    <p className="included__installation">Standard Professional Installation</p>
                                </div>
                            </div>
                        </div>      
                    </div> 
                </section>
            </div>    
        );
    }     
}  
export default Packages;  