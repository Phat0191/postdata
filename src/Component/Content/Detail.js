import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Comment from './comment';
class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{},
      cate: {}
    }
  }
  componentDidMount() {
    var productid = window.location.pathname;
    productid = productid.split("Detail/");
      axios({
      method: 'GET',
      url: 'http://localhost:8080/api/products/' + productid[1],
      data: null
  }).then(res => {
    this.setState({user: res.data}, ()=> axios({
      method: 'GET',
      url: 'http://localhost:8080/api/categories/' + this.state.user['categories'],
      data: null
    }).then(res => {
    this.setState({cate: res.data}, ()=> console.log(this.state.cate));
    }));
});
  }
  
    render() {
      
        return (
          <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Boutique | Ecommerce bootstrap template</title>
          <meta name="description" content />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="all,follow" />

          {/* Bootstrap CSS*/}
          <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css" />
          {/* Lightbox*/}
          <link rel="stylesheet" href="vendor/lightbox2/css/lightbox.min.css" />
          {/* Range slider*/}
          <link rel="stylesheet" href="vendor/nouislider/nouislider.min.css" />
          {/* Bootstrap select*/}
          <link rel="stylesheet" href="vendor/bootstrap-select/css/bootstrap-select.min.css" />
          {/* Owl Carousel*/}
          <link rel="stylesheet" href="vendor/owl.carousel2/assets/owl.carousel.min.css" />
          <link rel="stylesheet" href="vendor/owl.carousel2/assets/owl.theme.default.css" />
          {/* Google fonts*/}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400;800&display=swap" />
          {/* theme stylesheet*/}
          <link rel="stylesheet" href="css/style.default.css" id="theme-stylesheet" />
          {/* Custom stylesheet - for your changes*/}
          <link rel="stylesheet" href="css/custom.css" />
          {/* Favicon*/}
          <link rel="shortcut icon" href="img/favicon.png" />
          {/* Tweaks for older IEs*/}{/*[if lt IE 9]>
          
          <![endif]*/}
          <div className="page-holder bg-light">
            {/*  Modal */}

            <section className="py-5">
              <div className="container">
                <div className="row mb-5">
                  <div className="col-lg-6">
                    {/* PRODUCT SLIDER*/}
                    <div className="row m-sm-0">
                      <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0">
                        <div className="owl-thumbs d-flex flex-row flex-sm-column" data-slider-id={1}>
                          <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src={[this.state.user['detail_image']]} alt="..." /></div>
                          <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src={[this.state.user['detail_image']]} alt="..." /></div>
                          <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src={[this.state.user['detail_image']]} alt="..." /></div>
                          <div className="owl-thumb-item flex-fill mb-2"><img className="w-100" src={[this.state.user['detail_image']]} alt="..." /></div>
                        </div>
                      </div>
                      <div className="col-sm-10 order-1 order-sm-2">
                        <div className="owl-carousel product-slider" data-slider-id={1}><a className="d-block" href="img/product-detail-1.jpg" data-lightbox="product" title="Product item 1"><img className="img-fluid" src={[this.state.user['detail_image']]} alt="..." /></a><a className="d-block" href="img/product-detail-2.jpg" data-lightbox="product" title="Product item 2"><img className="img-fluid" src={[this.state.user['detail_image']]} alt="..." /></a><a className="d-block" href="img/product-detail-3.jpg" data-lightbox="product" title="Product item 3"><img className="img-fluid" src={[this.state.user['detail_image']]} alt="..." /></a><a className="d-block" href="img/product-detail-4.jpg" data-lightbox="product" title="Product item 4"><img className="img-fluid" src={[this.state.user['detail_image']]} alt="..." /></a></div>
                      </div>
                    </div>
                  </div>
                  {/* PRODUCT DETAILS*/}
                  <div className="col-lg-6">
                    <ul className="list-inline mb-2">
                    {(() => {
                        for(let i = 0; i <= this.state.user['star']; i++){
                          return <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                        }
                      })()}
                    </ul>
                    <h1>{[this.state.user['name']]}</h1>
                    {(() => {
                        if(this.state.user['sale'] != 0){
                          return <Fragment><strike><p className="text-muted lead">$ {[this.state.user['price']]}</p></strike><p className="text-muted lead">$ {[this.state.user['sale']]}</p></Fragment>
                        }
                        else{
                          return <p className="text-muted lead">$ {[this.state.user['price']]}</p>
                        }
                      })()}
                    
                    <p className="text-small mb-4">{[this.state.user['description']]}</p>
                    <a className="btn btn-link text-dark p-0 mb-4" href="#"><i className="far fa-heart mr-2" />Add to wish list</a><br />
                    <ul className="list-unstyled small d-inline-block">
                      <li className="px-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Category:</strong><a className="reset-anchor ml-2" href="#">{[this.state.cate['name']]}</a></li>
                      
                    </ul>
                  </div>
                </div>
                <Comment />
                {/* RELATED PRODUCTS*/}
                <h2 className="h5 text-uppercase mb-4">Related products</h2>
                <div className="row">
                  {/* PRODUCT*/}
                  <div className="col-lg-3 col-sm-6">
                    <div className="product text-center skel-loader">
                      <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-1.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart" /></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Kui Ye Chen’s AirPods</a></h6>
                      <p className="small text-muted">$250</p>
                    </div>
                  </div>
                  {/* PRODUCT*/}
                  <div className="col-lg-3 col-sm-6">
                    <div className="product text-center skel-loader">
                      <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-2.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart" /></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Air Jordan 12 gym red</a></h6>
                      <p className="small text-muted">$300</p>
                    </div>
                  </div>
                  {/* PRODUCT*/}
                  <div className="col-lg-3 col-sm-6">
                    <div className="product text-center skel-loader">
                      <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-3.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart" /></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Cyan cotton t-shirt</a></h6>
                      <p className="small text-muted">$25</p>
                    </div>
                  </div>
                  {/* PRODUCT*/}
                  <div className="col-lg-3 col-sm-6">
                    <div className="product text-center skel-loader">
                      <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-4.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart" /></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Timex Unisex Originals</a></h6>
                      <p className="small text-muted">$351</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <footer className="bg-dark text-white">
              <div className="container py-4">
                <div className="row py-5">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <h6 className="text-uppercase mb-3">Customer services</h6>
                    <ul className="list-unstyled mb-0">
                      <li><a className="footer-link" href="#">Help &amp; Contact Us</a></li>
                      <li><a className="footer-link" href="#">Returns &amp; Refunds</a></li>
                      <li><a className="footer-link" href="#">Online Stores</a></li>
                      <li><a className="footer-link" href="#">Terms &amp; Conditions</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <h6 className="text-uppercase mb-3">Company</h6>
                    <ul className="list-unstyled mb-0">
                      <li><a className="footer-link" href="#">What We Do</a></li>
                      <li><a className="footer-link" href="#">Available Services</a></li>
                      <li><a className="footer-link" href="#">Latest Posts</a></li>
                      <li><a className="footer-link" href="#">FAQs</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6 className="text-uppercase mb-3">Social media</h6>
                    <ul className="list-unstyled mb-0">
                      <li><a className="footer-link" href="#">Twitter</a></li>
                      <li><a className="footer-link" href="#">Instagram</a></li>
                      <li><a className="footer-link" href="#">Tumblr</a></li>
                      <li><a className="footer-link" href="#">Pinterest</a></li>
                    </ul>
                  </div>
                </div>
                <div className="border-top pt-4" style={{borderColor: '#1d1d1d !important'}}>
                  <div className="row">
                    <div className="col-lg-6">
                      <p className="small text-muted mb-0">© 2020 All rights reserved.</p>
                    </div>
                    <div className="col-lg-6 text-lg-right">
                      <p className="small text-muted mb-0">Template designed by <a className="text-white reset-anchor" href="https://bootstraptemple.com/p/bootstrap-ecommerce">Bootstrap Temple</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* JavaScript files*/}
            {/* FontAwesome CSS - loading as last, so it doesn't block rendering*/}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
          </div>
        </div>
        );
    }
}

export default Detail;