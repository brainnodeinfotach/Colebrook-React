import React from 'react'
import Footer from '../Footer';
import Header from '../Header';

function Checkout() {
  return (
    <div>
        
        <Header/>

        <main className="main">
        <div className="page-header breadcrumb-wrap">
            <div className="container">
            <div className="breadcrumb">
                <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
                <span /> Shop
                <span /> Checkout
            </div>
            </div>
        </div>
        <div className="container mb-80 mt-50">
            <div className="row">
            <div className="col-lg-8 mb-40">
                <h1 className="heading-2 mb-10">Checkout</h1>
                <div className="d-flex justify-content-between">
                <h6 className="text-body">There are <span className="text-brand">3</span> products in your cart</h6>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-7">
                <div className="row mb-50">
                <div className="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3">
                    <div className="toggle_info">
                    <span><i className="fi-rs-user mr-10" /><span className="text-muted font-lg">Already have an account?</span> <a href="#loginform" data-bs-toggle="collapse" className="collapsed font-lg" aria-expanded="false">Click here to login</a></span>
                    </div>
                    <div className="panel-collapse collapse login_form" id="loginform">
                    <div className="panel-body">
                        <p className="mb-30 font-sm">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                        <form method="post">
                        <div className="form-group">
                            <input type="text" name="email" placeholder="Username Or Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="login_footer form-group">
                            <div className="chek-form">
                            <div className="custome-checkbox">
                                <input className="form-check-input" type="checkbox" name="checkbox" id="remember" defaultValue />
                                <label className="form-check-label" htmlFor="remember"><span>Remember me</span></label>
                            </div>
                            </div>
                            <a href="#">Forgot password?</a>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-md" name="login">Log in</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <form method="post" className="apply-coupon">
                    <input type="text" placeholder="Enter Coupon Code..." />
                    <button className="btn btn-md" name="login">Apply Coupon</button>
                    </form>
                </div>
                </div>
                <div className="row">
                <h4 className="mb-30">Billing Details</h4>
                <form method="post">
                    <div className="row">
                    <div className="form-group col-lg-6">
                        <input type="text" required name="fname" placeholder="First name *" />
                    </div>
                    <div className="form-group col-lg-6">
                        <input type="text" required name="lname" placeholder="Last name *" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="form-group col-lg-6">
                        <input type="text" name="billing_address" required placeholder="Address *" />
                    </div>
                    <div className="form-group col-lg-6">
                        <input type="text" name="billing_address2" required placeholder="Address line2" />
                    </div>
                    </div>
                    <div className="row shipping_calculator">
                    <div className="form-group col-lg-6">
                        <div className="custom_select">
                        <select className="form-control select-active">
                            <option value>Select an option...</option>
                            <option value="AX">Aland Islands</option>
                            <option value="EH">Western Sahara</option>
                            <option value="WS">Western Samoa</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group col-lg-6">
                        <input required type="text" name="city" placeholder="City / Town *" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="form-group col-lg-6">
                        <input required type="text" name="zipcode" placeholder="Postcode / ZIP *" />
                    </div>
                    <div className="form-group col-lg-6">
                        <input required type="text" name="phone" placeholder="Phone *" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="form-group col-lg-6">
                        <input required type="text" name="cname" placeholder="Company Name" />
                    </div>
                    <div className="form-group col-lg-6">
                        <input required type="text" name="email" placeholder="Email address *" />
                    </div>
                    </div>
                    <div className="form-group mb-30">
                    <textarea rows={5} placeholder="Additional information" defaultValue={""} />
                    </div>
                    <div className="form-group">
                    <div className="checkbox">
                        <div className="custome-checkbox">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="createaccount" />
                        <label className="form-check-label label_info" data-bs-toggle="collapse" href="#collapsePassword" data-target="#collapsePassword" aria-controls="collapsePassword" htmlFor="createaccount"><span>Create an account?</span></label>
                        </div>
                    </div>
                    </div>  
                    <div id="collapsePassword" className="form-group create-account collapse in">
                    <div className="row">
                        <div className="col-lg-6">
                        <input required type="password" placeholder="Password" name="password" />
                        </div>
                    </div>
                    </div>
                    <div className="ship_detail">
                    <div className="form-group">
                        <div className="chek-form">
                        <div className="custome-checkbox">
                            <input className="form-check-input" type="checkbox" name="checkbox" id="differentaddress" />
                            <label className="form-check-label label_info" data-bs-toggle="collapse" data-target="#collapseAddress" href="#collapseAddress" aria-controls="collapseAddress" htmlFor="differentaddress"><span>Ship to a different address?</span></label>
                        </div>
                        </div>
                    </div>
                    <div id="collapseAddress" className="different_address collapse in">
                        <div className="row">
                        <div className="form-group col-lg-6">
                            <input type="text" required name="fname" placeholder="First name *" />
                        </div>
                        <div className="form-group col-lg-6">
                            <input type="text" required name="lname" placeholder="Last name *" />
                        </div>
                        </div>
                        <div className="row shipping_calculator">
                        <div className="form-group col-lg-6">
                            <input required type="text" name="cname" placeholder="Company Name" />
                        </div>
                        <div className="form-group col-lg-6">
                            <div className="custom_select w-100">
                            <select className="form-control select-active">
                                <option value>Select an option...</option>
                                <option value="AX">Aland Islands</option>
                                <option value="AF">Afghanistan</option>
                                <option value="ZW">Zimbabwe</option>
                            </select>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="form-group col-lg-6">
                            <input type="text" name="billing_address" required placeholder="Address *" />
                        </div>
                        <div className="form-group col-lg-6">
                            <input type="text" name="billing_address2" required placeholder="Address line2" />
                        </div>
                        </div>
                        <div className="row">
                        <div className="form-group col-lg-6">
                            <input required type="text" name="state" placeholder="State / County *" />
                        </div>
                        <div className="form-group col-lg-6">
                            <input required type="text" name="city" placeholder="City / Town *" />
                        </div>
                        </div>
                        <div className="row">
                        <div className="form-group col-lg-6">
                            <input required type="text" name="zipcode" placeholder="Postcode / ZIP *" />
                        </div>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="border p-40 cart-totals ml-30 mb-50">
                <div className="d-flex align-items-end justify-content-between mb-30">
                    <h4>Your Order</h4>
                    <h6 className="text-muted">Subtotal</h6>
                </div>
                <div className="divider-2 mb-30"/>
                <div className="table-responsive order_table checkout">
                    <table className="table no-border">
                    <tbody>
                        <tr>
                        <td className="image product-thumbnail"><img src="assets/imgs/shop/product-1-1.jpg" alt="#" /></td>
                        <td>
                            <h6 className="w-160 mb-5"><a href="shop-product-full.html" className="text-heading">Yidarton Women Summer Blue</a></h6>
                            <div className="product-rate-cover">
                            <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}}>
                                </div>
                            </div>
                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                        </td>
                        <td>
                            <h6 className="text-muted pl-20 pr-20">x 1</h6>
                        </td>
                        <td>
                            <h4 className="text-brand">$13.3</h4>
                        </td>
                        </tr>
                        <tr>
                        <td className="image product-thumbnail"><img src="assets/imgs/shop/product-2-2.jpg" alt="#" /></td>
                        <td>
                            <h6 className="w-160 mb-5"><a href="shop-product-full.html" className="text-heading">Seeds of Change Organic Quinoa</a></h6>
                            <div className="product-rate-cover">
                            <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}}>
                                </div>
                            </div>
                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                        </td>
                        <td>
                            <h6 className="text-muted pl-20 pr-20">x 1</h6>
                        </td>
                        <td>
                            <h4 className="text-brand">$15.0</h4>
                        </td>
                        </tr>
                        <tr>
                        <td className="image product-thumbnail"><img src="assets/imgs/shop/product-3-2.jpg" alt="#" /></td>
                        <td>
                            <h6 className="w-160 mb-5"><a href="shop-product-full.html" className="text-heading">Angie’s Boomchickapop Sweet </a></h6>
                            <div className="product-rate-cover">
                            <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}}>
                                </div>
                            </div>
                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                        </td>
                        <td>
                            <h6 className="text-muted pl-20 pr-20">x 1</h6>
                        </td>
                        <td>
                            <h4 className="text-brand">$17.2</h4>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
                <div className="payment ml-30">
                <h4 className="mb-30">Payment</h4>
                <div className="payment_option">
                    <div className="custome-radio">
                    <input className="form-check-input" required type="radio" name="payment_option" id="exampleRadios3" defaultChecked />
                    <label className="form-check-label" htmlFor="exampleRadios3" data-bs-toggle="collapse" data-target="#bankTranfer" aria-controls="bankTranfer">Direct Bank Transfer</label>
                    </div>
                    <div className="custome-radio">
                    <input className="form-check-input" required type="radio" name="payment_option" id="exampleRadios4" defaultChecked />
                    <label className="form-check-label" htmlFor="exampleRadios4" data-bs-toggle="collapse" data-target="#checkPayment" aria-controls="checkPayment">Cash on delivery</label>
                    </div>
                    <div className="custome-radio">
                    <input className="form-check-input" required type="radio" name="payment_option" id="exampleRadios5" defaultChecked />
                    <label className="form-check-label" htmlFor="exampleRadios5" data-bs-toggle="collapse" data-target="#paypal" aria-controls="paypal">Online Getway</label>
                    </div>
                </div>
                <div className="payment-logo d-flex">
                    <img className="mr-15" src="assets/imgs/theme/icons/payment-paypal.svg" alt="/"/>
                    <img className="mr-15" src="assets/imgs/theme/icons/payment-visa.svg" alt="/"/>
                    <img className="mr-15" src="assets/imgs/theme/icons/payment-master.svg" alt="/"/>
                    <img src="assets/imgs/theme/icons/payment-zapper.svg" alt="/"/>
                </div>
                <a href="#" className="btn btn-fill-out btn-block mt-30">Place an Order<i className="fi-rs-sign-out ml-15" /></a>
                </div>
            </div>
            </div>
        </div>
        </main>


        <footer className="main">
        <section className="newsletter mb-15">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="position-relative newsletter-inner">
                    <div className="newsletter-content">
                    <h2 className="mb-20">
                        Stay home &amp; get your daily <br />
                        needs from our shop
                    </h2>
                    <p className="mb-45">Start You'r Daily Shopping with <span className="text-brand"> Colebrook Mart</span></p>
                    <form className="form-subcriber d-flex">
                        <input type="email" placeholder="Your emaill address" />
                        <button className="btn" type="submit">Subscribe</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </footer>


        <Footer/>

    </div>
  )
}

export default Checkout;