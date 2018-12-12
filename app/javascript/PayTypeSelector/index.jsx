import React from 'react'
import NoPayType from './NoPayType'
import CheckPayType from './CheckPayType'
import CreditCardPayType from './CreditCardPayType'
import PurchaseOrderPayType from './PurchaseOrderPayType'


class PayTypeSelector extends React.Component {
    PayTypeCustomComponent;
    constructor(props){
        super(props);
        this.onPayTypeSelected = this.onPayTypeSelected.bind(this);
        this.state = { selectedPayType: null };
    }

    onPayTypeSelected(event){
        this.setState({selectedPayType: event.target.value });
    }

    render(){
        let PayTypeCustomComponent = NoPayType;
        if(this.state.selectedPayType == "Check"){
            PayTypeCustomComponent = CheckPayType;
        } else if(this.state.selectedPayType == "Credit Card"){
            PayTypeCustomComponent = CreditCardPayType;
        }else if(this.state.selectedPayType == "Purchase Order"){
            PayTypeCustomComponent = PurchaseOrderPayType;
        }

        return(
        <div>
          <div className="field">
              <label htmlFor="order_pay_type">Pay Type</label>
              <select id="pay_type" onChange={this.onPayTypeSelected} name="order[pay_type]">
                  <option value="">Select Payment Method</option>
                  <option value="Check">Check</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Purchase Order">Purchase Order</option>
              </select>
          </div>
            < PayTypeCustomComponent />
        </div>
        );
    }
}
export default PayTypeSelector