import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import outletJSON from '../../config/outlet.js';
import cssModules from 'react-css-modules';
import styles from './outlet.css';
import { handleOrder } from '../../actions/orderActions';
import { connect } from 'react-redux';
import SearchInput, { createFilter } from 'react-search-input';

const KEYS_TO_FILTERS = ['name']
@cssModules(styles)
class Outlets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.searchUpdated = this.searchUpdated.bind(this);
  }

  handleClick(outlet) {
    const { dispatch } = this.props;
    dispatch(handleOrder(outlet));
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

  render() {
    const filteredOutlet = outletJSON.outlets.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    return (
      <div>
      <SearchInput className="search-input" onChange={this.searchUpdated} />
        <table>
          <tbody>
            <tr className="table-row">
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Pincode</th>
            </tr>
          {
            filteredOutlet.map((outlet, key) => {
              return (
              <tr key={key}>
                <td><Link to="/orders" onClick={() => this.handleClick(outlet)}>{outlet.id}</Link></td>
                <td>{outlet.name}</td>
                <td>{outlet.address}</td>
                <td>{outlet.pin}</td>
              </tr>
              );
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}

Outlets.propTypes = {
  dispatch: PropTypes.func
};

function mapStateToProps() {
  return { };
}

export default connect(mapStateToProps)(Outlets);
