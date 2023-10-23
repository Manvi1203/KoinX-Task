import React, { Component } from 'react';
import './style.css';
import { Divider } from 'antd';
import { InputNumber } from 'antd';

import { Select } from 'antd';
const handleChange = (value) => {
  console.log(value); 
};
const AustralianFlag='https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg'

export class CryptoTaxCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      purchasePrice: 0,
      salePrice: 0,
      expenses: 0,
      investmentType: 'Short Term',
      annualIncome: '$0-$18,200',
      taxRate: 0,
      capitalGainsAmount: 0,
      longTermDiscount: 0,
      netCapitalGains: 0,
      taxToPay: 0,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.calculateTax);
  };

  calculateTax = () => {
    const { purchasePrice, salePrice, expenses, investmentType, annualIncome } = this.state;

    // Calculate Capital Gains Amount
    const capitalGainsAmount = salePrice - purchasePrice - expenses;

    // Calculate Tax Rate based on annual income
    let taxRate = 0;
    switch (annualIncome) {
      case '$0-$18,200':
        taxRate = 0;
        break;
      case '$18,201 - $45,000':
        taxRate = capitalGainsAmount > 0 ? 0.19 : 0;
        break;
      case '$45,001 - $120,000':
        taxRate = capitalGainsAmount > 0 ? 0.325 : 0;
        break;
      case '$120,001 - $180,000':
        taxRate = capitalGainsAmount > 0 ? 0.37 : 0;
        break;
      case '$180,001+':
        taxRate = capitalGainsAmount > 0 ? 0.45 : 0;
        break;
      default:
        taxRate = 0;
    }

    // Calculate Long Term Discount if applicable
    let longTermDiscount = 0;
    if (investmentType === 'Long Term' && capitalGainsAmount > 0) {
      longTermDiscount = capitalGainsAmount * 0.5;
    }

    // Calculate Net Capital Gains
    const netCapitalGains =
      investmentType === 'Long Term'
        ? capitalGainsAmount - longTermDiscount
        : capitalGainsAmount;

    // Calculate Tax to Pay
    const taxToPay = netCapitalGains * taxRate;

    this.setState({
      taxRate,
      capitalGainsAmount,
      longTermDiscount,
      netCapitalGains,
      taxToPay,
    });
  };

  render() {
    const { investmentType, capitalGainsAmount, longTermDiscount } = this.state;

    return (
      <div className='calculator'>
        {/* Input fields */}
        <div className='heading'><center>Free Crypto Tax Calculator Australia</center></div>
      <div className='cryptoCalc'>
        <div className='fyYear'>
          <p>Financial Year </p>
          <Select
            labelInValue
            defaultValue={{
              value: 'FY 2023-24',
              label: 'FY 2023-24',
            }}
            // style={{
            //   width: 64%,
            // }}
            onChange={handleChange}
            options={[
              {
                value: 'FY 2023-24',
                label: 'FY 2023-24',
              },
              {
                value: 'FY 2022-23',
                label: 'FY 2022-23',
              },
            ]}
          />
        </div> 
        <div className='country'>
          <p>Country </p>
          <Select
            labelInValue
            defaultValue={{
              value: 'Australia',
              label: (
                <div style={{ display: 'flex', flexDirection: 'row', marginRight:'3%', alignItems: 'center',}}>

                  <img src={AustralianFlag} alt="Australian Flag" style={{ width: '20px', height: '20px',marginRight:'3%' ,                   borderRadius: '50%', // Make the image circular
}} />{' '}
                  Australia
                </div>
              ),
            }}
            // style={{
            //   width: 64%,
            // }}
            onChange={handleChange}
            options={[
              {
                value: 'Australia',
                label: (
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',marginRight:'3%' }}>
                    <img
                      src={AustralianFlag}
                      alt="Australian Flag"
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%', 
                        marginRight:'3%'// Make the image circular
                      }}
                    />{' '}
                    Australia
                  </div>
                ),
              },
            ]}
            

          />
        </div> 
        
</div>
        <Divider/>
  <div className="purchaseSale">
  <div className="input-container">
  <label>Enter purchase price of Crypto</label>
  <InputNumber
    name="purchasePrice"
    onChange={(value) => this.handleInputChange({ target: { name: "purchasePrice", value } })}
    value={this.state.purchasePrice}
    prefix="$" 
    style={{ width: '100%' }}
  />
</div>
<div className="input-container">
  <label>Enter sale price of Crypto</label>
  <InputNumber
    name="salePrice"
    onChange={(value) => this.handleInputChange({ target: { name: "salePrice", value } })}
    value={this.state.salePrice}
    prefix="$" 
    style={{ width: '100%' }}
  />
</div>
</div>
<div className='purchaseSale'>

<div className="input-container">
  <label>Enter your expenses</label>
  <InputNumber
    name="expenses"
    onChange={(value) => this.handleInputChange({ target: { name: "expenses", value } })}
    value={this.state.expenses}
    prefix="$" 
    style={{ width: '100%' }}
  />
</div>

<div className="input-container">
  <label>Investment Type</label>
  {/* <select
    className='options'
    name="investmentType"
    onChange={this.handleInputChange}
    value={this.state.investmentType}
  >
    <option className='selectoptions' value="Short Term">Short Term</option>
    <option className='selectoptions' value="Long Term">Long Term</option>
  </select> */}
  <div className='investmentbuttons'>
    <div className='shorttermbutton'>
    <button
    className={`option-button short-term-button ${this.state.investmentType === "Short Term" ? "active" : ""}`}
    onClick={() => this.handleInputChange({ target: { name: "investmentType", value: "Short Term" } })}
  >
    Short Term
  </button>
  <p>{'<'}12 months</p>
  </div>
  <div className='shorttermbutton'>
  <button
    className={`option-button long-term-button ${this.state.investmentType === "Long Term" ? "active" : ""}`}
    onClick={() => this.handleInputChange({ target: { name: "investmentType", value: "Long Term" } })}
  >
    Long Term
  </button>
  <p>{'>'}12 months</p>
  </div>

</div>


</div>
</div>
<div className='purchaseSale'>
<div className="input-container">
  <label>Select your Annual Income:</label>
  <select
  className='optionsincome'
    name="annualIncome"
    onChange={this.handleInputChange}
    value={this.state.annualIncome}
  >
    <option value="$0-$18,200">$0-$18,200</option>
    <option value="$18,201 - $45,000">$18,201 - $45,000</option>
    <option value="$45,001 - $120,000">$45,001 - $120,000</option>
    <option value="$120,001 - $180,000">$120,001 - $180,000</option>
    <option value="$180,001+">$180,001+</option>
  </select>
</div>




        {/* Render other output fields, Tax Rate, Capital Gains Amount, etc. */}
        <p><strong>Tax Rate</strong><br></br>{this.state.taxRate * 100} %</p>
        </div>
        <div className='purchaseSale'>
        <div className="input-container">

        <label>Capital Gains Amount</label> <div className='gainsinfo'>${this.state.capitalGainsAmount}</div>
        </div>

        <div className="input-container">

          {/* Conditionally render "Discount for Long Term Gains" section */}
          <label>Discount for Long Term Gains</label>
          {investmentType === 'Long Term' && capitalGainsAmount > 0 && (
          <div className='gainsinfo'>
             ${longTermDiscount}
          </div>

        )}
        </div>
        </div>
        <div className='purchaseSale'>
        <div className='gains'>
        <p>Net Capital Gains Amount <br></br><center><strong style={{ color: '#0FBA83' }}>$ {this.state.netCapitalGains}</strong></center></p>
        </div>
        <div className='taxes'>
        <p>The tax you need to pay* <br></br><center><strong style={{ color: '#0141CF' }}>$ {this.state.taxToPay}</strong></center></p>
        </div>
        </div>

      </div>
    );
  }
}

export default CryptoTaxCalculator;
