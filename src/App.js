import React from "react";
// import { Component } from "../../components/Component";
// import { ElementKoinxLogo } from "../../components/ElementKoinxLogo";
// import { IconlyLightOutline } from "../../components/IconlyLightOutline";
import newsletter from './koinx-email-image.png';
import { Button, Input, Select, Space } from 'antd';
import whitelogo from './koinx-logowhite.png'
import './App.css';
import { FrequentlyAskedQuestions } from "../src/components/FAQ/Faqs";
import { CryptoTaxCalculator } from "../src/components/TaxCalculator/CryptoTaxCal";
import { Navbar } from "../src/components/NavBar/NavBar";
export const App = () => {
  return (
    <div className="index">
      <div className="div">
        <Navbar></Navbar>
        <div className="div-2">
          <div className="frame-8">
            <div className="frame-9">
              <div className='cryptoCalcandAd'>
                <CryptoTaxCalculator></CryptoTaxCalculator>
                <div className="div-10">
                <div className="frame-36">
                  <div className="frame-37">
                    <div className="frame-38">
                      <p className="text-wrapper-39">Get Started with KoinX for FREE</p>
                      <p className="text-wrapper-40">
                        With our range of features that you can equip for free, KoinX allows you to be more educated and
                        aware of your tax reports.
                      </p>
                    </div>
                    <img
                      className="frame-39"
                      alt="Frame"
                      src="https://cdn.animaapp.com/projects/65348f3cc2199f44706009aa/releases/653490b1ac0b549a11441a72/img/frame-1@2x.png"
                    />
                    <div className="group-wrapper">
                      <div className="group-5">
                        <div className="group-6">
                          <div className="frame-40">
                            <div className="frame-20">
                              <div className="text-wrapper-41">Get Started for FREE</div>
                              <div className="iconly-light-arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
              <div className="subscribe">
                  <div><img src={newsletter}  alt='newsletter' className='newsletter'></img></div>
                  <div className='newsletter-text'><p>Stay up to date with latest crypto news <br></br>and events. Subscribe to our newsletter</p>
                  <Space.Compact style={{ width: '80%' }}>
                        <Input placeholder="Enter your email address." />
                        <Button type="primary">Subscribe</Button>
                  </Space.Compact>
                  </div>
                  
              </div>

              <footer className="footer">
            <div className="div-11">
              <div className="div-12">
                <div className="frame-44">
                  <div className="one-koinx-logo-wrapper">
                    <img src={whitelogo} alt="koinxlogo" className='logofooter'></img>
                  </div>
                  <img
                    className="frame-45"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/65348f3cc2199f44706009aa/releases/653490b1ac0b549a11441a72/img/frame-1914-1@2x.png"
                  />
                </div>
                <div className="hr-3" />
                <div className="div-13">
                  <div className="div-14">
                    <div className="text-wrapper-43">Crypto Taxes for</div>
                    <div className="ul">
                      <div className="text-wrapper-44">Individuals and investors</div>
                      <div className="text-wrapper-45">Tax Professionals and Accountants</div>
                      <div className="text-wrapper-45">Exchanges and Web3 projects</div>
                    </div>
                  </div>
                  <div className="div-15">
                    <div className="text-wrapper-43">Free Tools</div>
                    <div className="ul-2">
                      <div className="text-wrapper-44">Crypto Prices Live</div>
                      <div className="text-wrapper-45">Crypto Tax Calculator</div>
                      <div className="text-wrapper-45">Crypto Tax Saving Speculator</div>
                      <div className="text-wrapper-45">Crypto Profit Calculator</div>
                      <div className="text-wrapper-46">Crypto Converter</div>
                      <div className="text-wrapper-45">Crypto Staking ROI Calculator</div>
                    </div>
                  </div>
                  <div className="div-16">
                    <div className="text-wrapper-43">Resource Center</div>
                    <div className="ul-3">
                      <div className="frame-46">
                        <div className="text-wrapper-44">Crypto Tax Guides</div>
                        <p className="text-wrapper-45">Dumb Ways To Lose Money</p>
                        <div className="text-wrapper-45">Crypto Tax Savings Guide</div>
                        <div className="text-wrapper-45">Blogs</div>
                        <div className="text-wrapper-45">Crypto Buying Guides</div>
                        <div className="text-wrapper-46">Crypto Staking Guides</div>
                        <div className="text-wrapper-46">Crypto Mining Guides</div>
                        <div className="text-wrapper-46">Crypto Price Predictions</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-17">
                    <div className="text-wrapper-43">Help And Support</div>
                    <div className="ul-4">
                      <div className="text-wrapper-44">Product Guides</div>
                      <div className="text-wrapper-45">How To Guides</div>
                      <div className="text-wrapper-45">Templates</div>
                      <div className="text-wrapper-45">Contact us</div>
                    </div>
                  </div>
                  <div className="div-18">
                    <div className="text-wrapper-47">Company</div>
                    <div className="ul-5">
                      <div className="frame-47">
                        <div className="text-wrapper-44">About Us</div>
                        <div className="text-wrapper-45">Backed by</div>
                        <div className="text-wrapper-45">Media and Press</div>
                        <div className="a">
                          <div className="text-wrapper-44">Careers</div>
                          <div className="span-2">
                            <div className="text-wrapper-48">We’re hiring</div>
                          </div>
                        </div>
                        <div className="text-wrapper-45">Refund Policy</div>
                        <div className="text-wrapper-45">Brand Assets</div>
                        <div className="text-wrapper-45">Terms of use</div>
                        <div className="text-wrapper-45">Privacy Policy</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hr-4" />
                <p className="text-wrapper-49">© All rights reserved by Simplify Infotech Pvt. Ltd.</p>
              </div>
            </div>
          </footer>
            </div>
          </div>
        </div>
       

       
      </div>
    </div>
  );
};


export default App;
