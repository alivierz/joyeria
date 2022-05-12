import React, { Component } from "react";
import Slider from "react-slick";
import './slide.css'

export default class SliderCompo extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1500,
      cssEase: "linear",
      adaptiveHeight: true,
      className: '',
      arrows: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }]

    };
    return (
        <div className="container-slider">
            <Slider {...settings} className='slide'>
                <div >
                    <img src='https://www.vam.ac.uk/on/demandware.static/-/Sites-VAM_Storefront/default/dw88c1556f/images/category/jewellery/jewellery_homepage_desktop.jpg' alt="" className="item"/>
                </div>
                <div >
                    <img src="https://www.trendokart.com/wp-content/uploads/2021/08/F.jpeg" alt="" className="item"/>
                </div>
                <div >
                    <img src="https://www.providentjewelry.com/wp-content/uploads/2020/08/Provident-Jewelry-WPB-Location-018.jpg" alt="" className="item"/>
                </div>
                <div >
                    <img src="https://d3em83qrfmyuai.cloudfront.net/wp-content/uploads/2021/04/STI_DES_5-Asian-American-Designers_Mimi-So-Bow-Rings_IMG_16x9.jpg" alt="" className="item"/>
                </div>
                <div >
                    <img src="https://www.fred.com/on/demandware.static/-/Sites-fredEuropeanWebsite-Library/default/dw3570593f/animatedassets-tpl1/mother-1.jpg" alt="" className="item"/>
                </div>
                <div >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToGjrdUpzxGmeinnUtRjU9DN6MItxgLL66Lg&usqp=CAU" alt="" className="item"/>
                </div>
            
            </Slider>
        </div>
    );
  }
}


