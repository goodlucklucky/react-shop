import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const cartProductTotals = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-3 offset-sm-6 text-left shop-cart-amounts">
                    Subtotal
                </div>
                <div className="col-sm-3 text-right shop-cart-amounts">
                    Ksh. {props.subtotal.toLocaleString()}
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-3 offset-sm-6 text-left shop-cart-amounts">
                    Estimated shipping
                </div>
                <div className="col-sm-3 text-right shop-cart-amounts">
                    Ksh. {props.shippingPrice.toLocaleString()}
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-3 offset-sm-6 text-left">
                    <h4 className={'shop-cart-total'}>Total</h4>
                </div>
                <div className="col-sm-3 text-right">
                    <h4 className={'shop-cart-total'}>Ksh. {(props.shippingPrice + props.subtotal).toLocaleString()}</h4>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-8 offset-sm-4 text-right">
                    <button onClick={props.clearCart} className="btn btn btn-outline-secondary mr-4">Clear cart</button>
                    <Link to={'/'} className="btn btn btn-outline-secondary mr-4" href="#" role="button">Continue
                        shopping</Link>
                    <button className="btn btn-secondary"
                            type="submit"
                            disabled={props.subtotal <= 0}
                            onClick={props.checkout}>
                        Checkout
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
};

cartProductTotals.propTypes = {
    subtotal: PropTypes.number.isRequired,
    shippingPrice: PropTypes.number,
    clearCart: PropTypes.func.isRequired,
};

cartProductTotals.defaultProps = {
    shippingPrice: 0,
};

export default cartProductTotals;