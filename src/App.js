import React, { Component } from 'react';
import logo from './logo.svg';
// import axios from 'axios';

import './assets/css/styles.css';
import './assets/js/project.js';
class App extends Component {

  constructor() {
    super();
    this.state = {

    }; 
  }  

  render() {
    return (
      <div className="App">
        <header className="header">
          <nav>
            <div className="row top-nav">
              <div className="columns large-2">
                <img className="header__direct-tv-logo" alt="DirecTV Authorized Retailer Logo" src="/img/logo-directv.png" />
              </div>
              <div className="columns large-5">  
                <ul className="inline-list">
                  <li><a className="header__nav-items" href="#">Shop packages</a></li>
                  <li><a className="header__nav-items" href="#">Shop bundle</a></li>
                  <li><a className="header__nav-items" href="#">Customer service</a></li>
                </ul>  
              </div>
              <div className="header__phone-section  columns large-4 large-offset-1">
                <p className="header__call-to-action">Call to Order</p>
                <a className="header__phone-number" href="tel:1-888-444-5555">1-888-444-5555</a>
              </div>    
            </div> {/* /.row */}
          </nav> 
        </header>
        <main>
          
          <section className="hero">
            <div className="row">
              <div className="columns large-6">
                <h2 className="hero__heading">All Included DIRECTV Packages</h2>
                <p className="hero__description">Enjoy TV without the hidden fees. Find the DIRECTV package that’s right for you.</p>
                <button className="hero__button"><a className="hero__button--text" href="#">View packages</a></button>
              </div>  
            </div>
            <div className="row">
              <div className="columns large-6 large-offset-6 text-center">
                <p className="hero__movie-subtext">Wonder Woman now playing on DIRECTV CINEMA®</p>
              </div>  
            </div>    
          </section> 

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
                <button className="shop__button"><a className="shop__shop-bundles" href="#">Shop bundles</a></button>
              </div>
            </div>  
          </section>

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
              <div className="  columns large-4">
                <div className="included__fees--section  row">
                  <div className="included__border-color-green  columns large-2">
                    <i className="included__check  fa fa-check" aria-hidden="true"></i>
                  </div>
                  <div className="included__border-color-green columns large-9 end">
                    <p className="included__fees">Monthly equipment fees for up to 4 TVs</p>
                  </div>
                </div>
              </div>
              <div className="  columns large-4 end">
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

          <section className="bundle">  
            <div className="row">
              <div className="columns large-12">
                <p className="bundle__24-month-agreement">ALL DIRECTV OFFERS REQUIRE 24-MO TV AGREEMENT. EARLY TERMINATION FEE OF $20/MO. FOR EACH MONTH REMAINING ON AGMT., $35 ACTIVATION,  EQUIPMENT NON-RETURN & ADD’L FEES APPLY.  New approved residential customers only (equipment lease req’d). Credit card req’d (except MA & PA).</p>
              </div>  
            </div>
            <div className="row">
              <div className="columns large-1 large-offset-5 text-center">
                <a className="bundle__offer-details" href="#">offer details</a>
              </div>  
            </div>
            <div className="row">
              <div className="columns large-10 large-offset-1 text-center">
                <h3 className="bundle__add-internet">Add Internet for as little as $30 more per month</h3>
              </div>  
            </div>
            <div className="row">
              <div className="columns large-11 text-center">   
                <p className="bundle__12-month-agreement">Plus Taxes. For 12 Months W/ 24-mo. TV agmt* $90/mo. in months 13-24 (subject to change). Regional sports fee up to $7.29/mo. is extra & applies in certain markets. For SELECT All-Included TV Pkg.</p>
              </div>  
              <div className="columns large-1  text-center">
                <a className="bundle__offer-details-2" href="#">offer details</a>
              </div>  
            </div>
            <div className="row">
              <div className="columns large-4 large-offset-4 text-center">
                <button className="bundle__button"><a className="bundle__tv-and-internet"href="#">Shop TV + Internet Bundles</a></button>
              </div>
            </div>                           
          </section>

          <section className="hero-2">
            <div className="row">
              <div className="columns large-5">
                <h2 className="hero-2__heading">Bundle DIRECTV with AT&T</h2>
                <p className="hero-2__description">Get over 99% reliability on your home high speed Internet AND 99% worry-free signal reliability with DIRECTV.</p>
                <p className="hero-2__disclosure">Claim based on U-verse High Speed Internet service. DIRECTV reliability based on a Nationwide Study of representative cities.</p>
              </div>  
            </div>
            <div className="row">
              <div className="columns large-6 large-offset-6 text-center">
                <p className="hero-2__movie-subtext">Top Cat Begins now playing on DIRECTV CINEMA®</p>
              </div>  
            </div>    
          </section>

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

          <section className="search">
            <div className="row">
              <div className="columns large-8 large-offset-2 text-center">
                <i className="search__map-marker  fa fa-map-marker" aria-hidden="true"></i>
                <input className="search__input-text" type="text" placeholder="Enter street address"/>
                <input className="search__input-button" type="submit" value="Check availability" />
              </div>
            </div>          
          </section>

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
              <div className="columns large-4 large-offset-4 text-center">
                <p className="price__taxes">Plus taxes. 12 mo agmt, other qualifying service & combined bill req’d.* Incl 1TB data/mo. $10 chrg for each add’l 50GB (up to $100/mo.)†</p>
                <button className="price__button"><a className="price__address-check" href="#">Check another address</a></button>
              </div>
            </div>            
          </section>

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
              <div className="columns large-6 large-offset-6 text-center">
                <p className="hero-3__movie-subtext">King Aurthur: Legend of the Sword now playing on DIRECTV CINEMA®</p>
              </div>  
            </div>    
          </section>     

        </main>

        <footer className="footer">
          <div className="row">
            <div className="columns large-8 large-offset-2 end">
              <nav>
                <ul className="inline-list">
                  <li><a className="footer__nav-items" href="#">About Us</a></li>
                  <li><a className="footer__nav-items" href="#">Offer Legal</a></li>
                  <li><a className="footer__nav-items" href="#">ADA Notice</a></li>
                  <li><a className="footer__nav-items" href="#">Terms & Conditions</a></li>
                  <li><a className="footer__nav-items" href="#">Privacy Policy</a></li>
                </ul>  
              </nav> 
            </div>
          </div>    
          <div className="row">
            <div className="footer__t-and-cs  columns large-12">
              <p>ALL DIRECTV OFFERS REQUIRE 24-MO TV AGREEMENT. EARLY TERMINATION FEE OF $20/MO. FOR EACH MONTH REMAINING ON AGMT., $35 ACTIVATION, EQUIPMENT NON-RETURN & ADD'L FEES APPLY.  New approved residential customers only (equipment lease req'd). Credit card req'd (except MA & PA).</p>
              <p>1-YR ALL INCLUDED PACKAGE PRICE: Ends 9/30/17. Available only in the U.S. (excludes Puerto Rico and U.S.V.I.) Price includes All Included TV Pkg, monthly fees for a Genie HD DVR + three (3) add’l receivers , and standard prof’l installation in up to four rooms. Custom installation extra. After 12 mos. or loss of eligibility, then prevailing rate for TV package applies (currently $90/mo for SELECT All Included; $101/mo for ENTERTAINMENT All Included; $115/mo for CHOICE All Included; $124/mo for XTRA All Included; $131/mo for ULTIMATE All Included; $187/mo for PREMIER All Included ), unless cancelled or changed by customer prior to end of the promotional period. Exclusions: Price does not include taxes, $35 activation & other fees apply, Regional Sports fee of up to $7.29/mo. assessed with CHOICE and/or MÁS ULTRA Pkg and above , applicable use tax expense surcharge on retail value of installation, equipment upgrades/add-ons, and certain other add’l fees & chrgs. Some offers may not be available through all channels and in select areas.</p>
              <p>Geographic and service restrictions apply to AT&T Internet services. Call to see if you qualify.</p>
              <p>$30 Internet Offer: Price for Internet plans (768K-50M) for new residential customers when bundled with another qualifying AT&T service (TV/AT&T Phone/Wireless). Pricing includes Wi-Fi Gateway. Must maintain a qualifying bundle to receive advertised pricing. Prorated ETF ($180) applies if Internet is disconnected before end of 12 months. Up to $99 installation fee applies. Credit restrictions apply.</p>
              <p>2-YR BUNDLE PRICE: Ends 9/30/17. Price Includes All-Included Pkg. ($50/mo. for SELECT; $55/mo. for ENTERTAINMENT; $60/mo. for CHOICE; $70/mo. for XTRA; $75/mo. for ULTIMATE; $125/mo for PREMIER) and High Speed Internet 6.0 ($30/mo.) and monthly fees for Wi-Fi Gateway and a Genie HD DVR + three (3) add’l receivers , and standard prof’l installation in up to four rooms. Custom installation extra. Svcs: Must maintain all bundled services for 24 mos. to receive advertised pricing. After 24 mos., then prevailing monthly rates apply, unless cancelled or changed by customer prior to end of 24 mos. Exclusions: Price does not include taxes, $35 activation & other fees apply, applicable use tax expense surcharge on retail value of installation, equipment upgrades/add-ons, and certain other add’l fees & chrgs. Some offers may not be available through all channels and in select areas.</p>
              <p>$99.99 2-YR BUNDLE PRICE: Ends 9/30/17. Price Includes SELECT All-Included TV Pkg. ($50/mo.), Internet plans (768k – 50M) ($30/mo.) and Phone Unlimited North America ($19.99/mo.), monthly fees for Wi-Fi Gateway and a Genie HD DVR + three (3) add’l receivers , and standard prof’l installation in up to four rooms. Custom installation extra. Svcs: Must maintain all bundled services for 24 mos. to receive advertised pricing. After 24 mos, then prevailing monthly rates apply, unless cancelled or changed by customer prior to end of 24 mos. Exclusions: Price does not include taxes, $35 activation & other fees apply, applicable use tax expense surcharge on retail value of installation, equipment upgrades/add-ons, and certain other add’l fees & chrgs. Some offers may not be available through all channels and in select areas.</p>
              <p>$104.99 2-YR BUNDLE PRICE: Ends 9/30/17. Price Includes Entertainment All-Included TV Pkg. ($50/mo.), Internet plans (768k – 50M) ($30/mo.) and Phone Unlimited North America ($19.99/mo.), monthly fees for Wi-Fi Gateway and a Genie HD DVR + three (3) add’l receivers , and standard prof’l installation in up to four rooms. Custom installation extra. Svcs: Must maintain all bundled services for 24 mos. to receive advertised pricing. After 24 mos, then prevailing monthly rates apply, unless cancelled or changed by customer prior to end of 24 mos. Exclusions: Price does not include taxes, $35 activation fee, applicable use tax expense surcharge on retail value of installation, equipment upgrades/add-ons, and certain other add’l fees & chrgs. Some offers may not be available through all channels and in select areas.</p>
              <p>$109.99 2-YR BUNDLE PRICE: Ends 9/30/17. Price Includes CHOICE All-Included TV Pkg. ($60/mo.), Internet plans (768k – 50M) ($30/mo.) and Phone Unlimited North America ($19.99/mo.), monthly fees for Wi-Fi Gateway and a Genie HD DVR + three (3) add’l receivers , and standard prof’l installation in up to four rooms. Custom installation extra. Svcs: Must maintain all bundled services for 24 mos. to receive advertised pricing. After 24 mos, then prevailing monthly rates apply, unless cancelled or changed by customer prior to end of 24 mos. Exclusions: Price does not include taxes, $35 activation fee, Regional Sports fee of up to $7.29/mo. assessed with CHOICE and/or MÁS ULTRA Pkg and above, applicable use tax expense surcharge on retail value of installation, equipment upgrades/add-ons, and certain other add’l fees & chrgs. Some offers may not be available through all channels and in select areas.</p>
              <p>$119.99 2-YR BUNDLE PRICE: Ends 9/30/17. Price Includes XTRA All-Included TV Pkg. ($70/mo.), Internet plans (768k – 50M) ($30/mo.) and Phone Unlimited North America ($19.99/mo.), monthly fees for Wi-Fi Gateway and a Genie HD DVR + three (3) add’l receivers , and standard prof’l installation in up to four rooms. Custom installation extra. Svcs: Must maintain all bundled services for 24 mos. to receive advertised pricing. After 24 mos, then prevailing monthly rates apply, unless cancelled or changed by customer prior to end of 24 mos. Exclusions: Price does not include taxes, $35 activation fee, Regional Sports fee of up to $7.29/mo. assessed with CHOICE and/or MÁS ULTRA Pkg and above, applicable use tax expense surcharge on retail value of installation, equipment upgrades/add-ons, and certain other add’l fees & chrgs. Some offers may not be available through all channels and in select areas.</p>
              <p>$124.99 2-YR BUNDLE PRICE: Ends 9/30/17. Price Includes ULTIMATE All-Included TV Pkg. ($75/mo.), Internet plans (768k – 50M) ($30/mo.) and Phone Unlimited North America ($19.99/mo.), monthly fees for Wi-Fi Gateway and a Genie HD DVR + three (3) add’l receivers , and standard prof’l installation in up to four rooms. Custom installation extra. Svcs: Must maintain all bundled services for 24 mos. to receive advertised pricing. After 24 mos, then prevailing monthly rates apply, unless cancelled or changed by customer prior to end of 24 mos. Exclusions: Price does not include taxes, $35 activation fee, Regional Sports fee of up to $7.29/mo. assessed with CHOICE and/or MÁS ULTRA Pkg and above, applicable use tax expense surcharge on retail value of installation, equipment upgrades/add-ons, and certain other add’l fees & chrgs. Some offers may not be available through all channels and in select areas.</p>
              <p>$174.99 2-YR BUNDLE PRICE: Ends 9/30/17. Price Includes PREMIER All-Included TV Pkg. ($125/mo.), Internet plans (768k – 50M) ($30/mo.) and Phone Unlimited North America ($19.99/mo.), monthly fees for Wi-Fi Gateway and a Genie HD DVR + three (3) add’l receivers , and standard prof’l installation in up to four rooms. Custom installation extra. Svcs: Must maintain all bundled services for 24 mos. to receive advertised pricing. After 24 mos, then prevailing monthly rates apply, unless cancelled or changed by customer prior to end of 24 mos. Exclusions: Price does not include taxes, $35 activation fee, Regional Sports fee of up to $7.29/mo. assessed with CHOICE and/or MÁS ULTRA Pkg and above, applicable use tax expense surcharge on retail value of installation, equipment upgrades/add-ons, and certain other add’l fees & chrgs. Some offers may not be available through all channels and in select areas.</p>
              <p>$119.99 2-YR BUNDLE PRICE: Ends 9/30/17. Price Includes CHOICE All-Included TV Pkg. ($50/mo.), Internet 75M Plan ($50/mo.) and Phone Unlimited North America ($19.99/mo.), monthly fees for Wi-Fi Gateway and a Genie HD DVR + three (3) add’l receivers , and standard prof’l installation in up to four rooms. Custom installation extra. Svcs: Must maintain all bundled services for 24 mos. to receive advertised pricing. After 24 mos, then prevailing monthly rates apply, unless cancelled or changed by customer prior to end of 24 mos. Exclusions: Price does not include taxes, $35 activation fee, Regional Sports fee of up to $7.29/mo. assessed with CHOICE and/or MÁS ULTRA Pkg and above, applicable use tax expense surcharge on retail value of installation, equipment upgrades/add-ons, and certain other add’l fees & chrgs. Some offers may not be available through all channels and in select areas.</p>
              <p>$124.99 2-YR BUNDLE PRICE: Ends 9/30/17. Price Includes ENTERTAINMENT All-Included TV Pkg. ($55/mo.), Internet 75M Plan ($50/mo.) and Phone Unlimited North America ($19.99/mo.), monthly fees for Wi-Fi Gateway and a Genie HD DVR + three (3) add’l receivers , and standard prof’l installation in up to four rooms. Custom installation extra. Svcs: Must maintain all bundled services for 24 mos. to receive advertised pricing. After 24 mos, then prevailing monthly rates apply, unless cancelled or changed by customer prior to end of 24 mos. Exclusions: Price does not include taxes, $35 activation fee, Regional Sports fee of up to $7.29/mo. assessed with CHOICE and/or MÁS ULTRA Pkg and above, applicable use tax expense surcharge on retail value of installation, equipment upgrades/add-ons, and certain other add’l fees & chrgs. Some offers may not be available through all channels and in select areas.</p>
              <p>$129.99 2-YR BUNDLE PRICE: Ends 9/30/17. Price Includes CHOICE All-Included TV Pkg. ($60/mo.), Internet 75M Plan ($50/mo.) and Phone Unlimited North America ($19.99/mo.), monthly fees for Wi-Fi Gateway and a Genie HD DVR + three (3) add’l receivers , and standard prof’l installation in up to four rooms. Custom installation extra. Svcs: Must maintain all bundled services for 24 mos. to receive advertised pricing. After 24 mos, then prevailing monthly rates apply, unless cancelled or changed by customer prior to end of 24 mos. Exclusions: Price does not include taxes, $35 activation fee, Regional Sports fee of up to $7.29/mo. assessed with CHOICE and/or MÁS ULTRA Pkg and above, applicable use tax expense surcharge on retail value of installation, equipment upgrades/add-ons, and certain other add’l fees & chrgs. Some offers may not be available through all channels and in select areas.</p>
              <p>$139.99 2-YR BUNDLE PRICE: Ends 9/30/17. Price Includes XTRA All-Included TV Pkg. ($70/mo.), Internet 75M Plan ($50/mo.) and Phone Unlimited North America ($19.99/mo.), monthly fees for Wi-Fi Gateway and a Genie HD DVR + three (3) add’l receivers , and standard prof’l installation in up to four rooms. Custom installation extra. Svcs: Must maintain all bundled services for 24 mos. to receive advertised pricing. After 24 mos, then prevailing monthly rates apply, unless cancelled or changed by customer prior to end of 24 mos. Exclusions: Price does not include taxes, $35 activation fee, Regional Sports fee of up to $7.29/mo. assessed with CHOICE and/or MÁS ULTRA Pkg and above, applicable use tax expense surcharge on retail value of installation, equipment upgrades/add-ons, and certain other add’l fees & chrgs. Some offers may not be available through all channels and in select areas.</p>
              <p>$144.99 2-YR BUNDLE PRICE: Ends 9/30/17. Price Includes ULTIMATE All-Included TV Pkg. ($75/mo.), Internet 75M Plan ($50/mo.) and Phone Unlimited North America ($19.99/mo.), monthly fees for Wi-Fi Gateway and a Genie HD DVR + three (3) add’l receivers , and standard prof’l installation in up to four rooms. Custom installation extra. Svcs: Must maintain all bundled services for 24 mos. to receive advertised pricing. After 24 mos, then prevailing monthly rates apply, unless cancelled or changed by customer prior to end of 24 mos. Exclusions: Price does not include taxes, $35 activation fee, Regional Sports fee of up to $7.29/mo. assessed with CHOICE and/or MÁS ULTRA Pkg and above, applicable use tax expense surcharge on retail value of installation, equipment upgrades/add-ons, and certain other add’l fees & chrgs. Some offers may not be available through all channels and in select areas.</p>
              <p>$194.99 2-YR BUNDLE PRICE: Ends 9/30/17. Price Includes PREMIER All-Included TV Pkg. ($125/mo.), Internet 75M Plan ($50/mo.) and Phone Unlimited North America ($19.99/mo.), monthly fees for Wi-Fi Gateway and a Genie HD DVR + three (3) add’l receivers , and standard prof’l installation in up to four rooms. Custom installation extra. Svcs: Must maintain all bundled services for 24 mos. to receive advertised pricing. After 24 mos, then prevailing monthly rates apply, unless cancelled or changed by customer prior to end of 24 mos. Exclusions: Price does not include taxes, $35 activation fee, Regional Sports fee of up to $7.29/mo. assessed with CHOICE and/or MÁS ULTRA Pkg and above, applicable use tax expense surcharge on retail value of installation, equipment upgrades/add-ons, and certain other add’l fees & chrgs. Some offers may not be available through all channels and in select areas.</p>
              <p>† Unlimited data allowance may also be purchased separately for an add'l $30/mo., or maintain a bundle of TV & Internet on a combined bill and receive Unlimited Internet data ($30 value) at no add'l charge. For more info, go to www.att.com/internet-usage.</p>
              <p>‡ Must maintain a bundle of TV and Internet on a combined bill in order to receive unlimited data allowance at no add’l charge. For more info, go to www.att.com/internet-usage.</p>
              <p>AT&T PHONE: AT&T Phone service is provided over an Internet Protocol connection and powered by electrical power in your home.  AT&T Phone service including 911 dialing, will not function during a power outage without battery backup power.  It is your responsibility to purchase any necessary battery back-up units for your service. Phone Unlimited North America: Includes unlimited nationwide calling within the U.S., plus calls to Canada, Mexico and U.S. Territories; otherwise, per minute rates apply. An additional per minute rate applies to international calls terminating on mobile phones. </p>
              <p>INTERNET SVC: AT&T Internet, formerly known as AT&T U-verse, is high speed internet provided over an advanced digital network.</p>
              <p>DIRECTV SVC TERMS:  Subject to Equipment Lease & Customer Agreements. Must maintain a min. base TV pkg of $29.99/mo. Add’l Fees & Terms: $35 activation & other fees apply. Programming, pricing, terms and conditions subject to change at any time.  Visit directv.com/legal or call for details.</p>
              <p>◊PREMIUM MOVIES OFFER: After 3 mos., then-prevailing rate for all four (4) premium movie pkgs applies (currently $53.99/mo) unless canceled or changed by customer prior to end of the promotional period.</p> 
              <p>GENIE HD DVR UPGRADE OFFER: Includes instant rebates on one Genie HD DVR and up to three Genie Minis. Req’s SELECT Pkg or above; ÓPTIMO MÁS Pkg or above; or qual. int’l svc bundle with PREFERRED CHOICE. $99 fee applies for Wireless Genie Mini upgrade. Whole-Home HD DVR functionality req’s an HD DVR connected to one television and a Genie Mini, H25 HD Receiver(s) or a DIRECTV Ready TV/Device in each additional room. Limit of three remote viewings per HD DVR at a time. Visit directv.com/genie for complete details.</p>
              <p>2017 NFL SUNDAY TICKET OFFER: Package consists of all live out-of-market NFL games (based on customer’s service address) broadcast on FOX and CBS. However, games broadcast by your local FOX or CBS affiliate, and select International games, will not be available in NFL SUNDAY TICKET. Games available via remote viewing based on device location. Other conditions apply. 2017 NFL SUNDAY TICKET regular full-season retail price is $281.94. 2017 NFL SUNDAY TICKET MAX regular full-season retail price is $377.94. Customers activating CHOICE or MÁS ULTRA Pkg or above will be eligible to receive the 2017 season of NFL SUNDAY TICKET at no add’l cost and will receive a free upgrade to NFL SUNDAY TICKET MAX for the 2017 season. Your NFL SUNDAY TICKET subscription will renew automatically each season at the then prevailing rate (currently $281.94/season) unless you call to change or cancel by the date specified in your renewal notice. Up until the season starts, you can cancel anytime and receive any applicable refund.  To renew NFL SUNDAY TICKET MAX, customer must call to upgrade after the 2017 season. Subscription cannot be canceled (in part or in whole) after the start of the season and subscription fee cannot be refunded. Only one game may be accessed remotely at any given time.  Compatible device/operating system required for online/mobile access.  Additional data charges may apply. Visit directv.com/nfl for a list of compatible devices/system requirements. Short Cuts are available from midnight Sunday ET through midnight Wednesday ET via the NFL SUNDAY TICKET App.  For full Mix Channel and interactive functionality, HD equipment model H/HR 21 or later is required.</p>
              <p>HD: Number of HD channels varies based on package selection. To access HD programming, HD TV is required.</p>
              <p>LOCALS: Eligibility for local channels based on service address. Not all networks available in all markets.</p>
              <p>INSTALLATION: Standard professional installation included in up to four rooms only. Custom installation extra. Applicable use tax adjustment may apply on the retail value of the installation.</p>
              <p>^DATA FREE TV: Residential DIRECTV customers and select wireless customers only. Available only in the U.S. (excludes Puerto Rico and U.S. Virgin Islands). Streaming does not count against your data allotments. Exclusions: App download may incur data usage/charges. Advertisements and non-streaming app activity may incur data usage. Not available on streaming through GenieGO (formerly Nomad), select connected vehicles, prepaid, or to corporate responsibility users lines with a custom access point name. Eligible Wireless:  Requires postpaid data service on eligible device. Must not have data block on line. AT&T wireless usage subject to AT&T’s service terms, conditions, restrictions, and network management practices, including speed reduction. Streaming may not work at reduced speeds. Eligible DIRECTV: Content may vary by TV package and viewing location. All functions and programming subject to change at any time. Offer subject to change and may be discontinued at any time. Visit www.directv.com/learnmoredata for a list of eligible devices (sold separately).</p>
              <p>MOBILE SHARE ADVANTAGE: Data for use in the U.S., P.R. & U.S.V.I (“Domestic Coverage Area” or “DCA”). 10 GB + plans also includes usage in Mexico. Overage Charges & Data Speeds: No charge for overage. After all your high-speed data allotments are used, all data usage is slowed to a max of 128 Kbps (2G speed) for the rest of the bill cycle. You will have basic data use for viewing a web page or checking email. Audio/ video streaming, picture/ video messaging, as well as other usage, including sponsored data, will be impacted & may not work. See att.com/broadbandinfo for information about AT&T’s network management practices. Rollover Data: Unused data from the monthly plan allowance carries over for one bill cycle and is used after your monthly plan allowance. Unused Rollover Data automatically expires after one billing period or w/ any plan change (such as changing data amounts or termination). UNLIMITED TALK: For phones. Calls w/in DCA (10GB+ also calls w/in Mexico). Svc may be terminated for excessive roaming (see Wireless Customer Agmt at att.com/wca). Unltd Talk to Canada/ Mexico: 10GB+ plans. For phones. International Long Distance (ILD) calling from DCA to Mexico/ Canada. Other Countries: Per minute pay-per-use rates apply unless have an ILD svc pkg on the line. Rates subject to change without notice. For rates see att.com/worldconnect. UNLIMITED TEXT: Standard Messaging – For phones. Includes unltd number of messages up to 1MB in size w/in & from DCA (for 10 GB+ plans also Mexico) to more than 190 countries for text & 120 countries for picture/ video. Countries subj. to change. Msgs sent through applications may incur data/ other charges. Details at att.com/text2world.Advanced Messaging –Capable devices only. Both sender & recipient(s) must be AT&T postpaid wireless customers w/ HD Voice accounts, must have their devices turned on & be w/in AT&T owned & operated DCA only (excludes 3rd party coverage & use in Mexico). Includes unltd number of messages up to 10MB in size. Add’l restr’s apply. See details at att.com/advancedmessaging. See store or att.com/mobileshareadvantage for full plan details.</p>
              <p>GEN. SVC TERMS: Subj. to Wireless Customer Agmt (at att.com/wca) or for business customers the applicable Business Agmt. Svc not for resale. Fees, monthly & other charges, coverage, usage & other restrictions apply. Pricing, promotions, restrictions & terms subject to change and may be modified, or terminated at any time without notice. You get an off-net (roaming) usage allowance for each svc. If you exceed the allowance, your svc(s) may be restricted or terminated. Other restr’s apply & may result in svc termination.</p>
              <p>Offers may not be combined with other promotional offers on the same services and may be modified or discontinued at any time without notice. Other conditions apply to all offers.</p>
              <p>NFL, the NFL Shield design and the NFL SUNDAY TICKET name and logo are registered trademarks of the NFL and its affiliates. NFL team names and uniform designs are registered trademarks of the teams indicated.</p>
              <p>©2017 AT&T Intellectual Property. All Rights Reserved. AT&T, Globe logo, DIRECTV, and all other DIRECTV marks contained herein are trademarks of AT&T Intellectual Property and/or AT&T affiliated companies. All other marks are the property of their respective owners.</p>
            </div>  
          </div>
          <div className="row">
            <div className="columns large-4 large-offset-4">
              <img className="footer__d-star-logo" alt="Direct Star TV logo" src="/img/logo-Directstartv.png"/>
            </div>
          </div>      
        </footer>      
      </div>
    );
  }
}

export default App;
