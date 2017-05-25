import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ordersJSON from '../../data/orders.js';
import SearchInput, { createFilter } from 'react-search-input';

const KEYS_TO_FILTERS = ['id'];
class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    const { order } = this.props;
    return (
      <div>
        <div className="search-block">
          <h2 className="search-heading">Search by Id : </h2>
          <SearchInput className="search-input" onChange={this.searchUpdated} />
        </div><br/>
      {
        ordersJSON.orders && ordersJSON.orders.map((item, key) => {
          const isMatch = (item.outlet_id === order.id) ? true : false;
          const filteredOrder = item.Orderdetail.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
          if (isMatch) {
            return (
                <table cellPadding="10" key={key}>
                  <tbody>
                    <tr className="table-row">
                      <th>ID</th>
                      <th>Order Id</th>
                      <th>Amount</th>
                    </tr>
                  {
                    filteredOrder && filteredOrder.map((eachOrder, k) => {
                      return (
                      <tr key={k}>
                        <td>{eachOrder.id}</td>
                        <td>{eachOrder.order_id}</td>
                        <td>{eachOrder.amount}</td>
                      </tr>
                      );
                    })
                  }
                  </tbody>
                </table>
              );
          }
        })
      }
      </div>
    );
  }
}

Orders.propTypes = {
  order: PropTypes.any
};

function mapStateToProps(state) {
  return {
    order: state.order.orderData
  };
}

export default connect(mapStateToProps)(Orders);

