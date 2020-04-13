import React from 'react';
import MenuItem from "../UI/MenuItem/MenuItem";
import PropTypes from 'prop-types';

const menuComponent = (props) => {
    return (
        <React.Fragment>
            <MenuItem linkTo={'/'}>Home</MenuItem>
            <MenuItem linkTo={'/category/men'}>Men</MenuItem>
            <MenuItem linkTo={'/category/women'}>Women</MenuItem>
            <MenuItem linkTo={'/category/kids'}>Kids</MenuItem>
            <MenuItem linkTo={'/sale'}>Sale</MenuItem>
            <MenuItem linkTo={'/cart'}>
                Cart <span className="badge badge-light">{props.cartCount}</span>
            </MenuItem>
        </React.Fragment>
    )
};

menuComponent.propTypes = {
    cartCount: PropTypes.number
};

export default menuComponent;
