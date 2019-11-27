import React from 'react';
import './imageSlider.css';

class ImageSlider extends React.Component{
    render(){
        return(
            <div className ="slidesContainer">
                <div id="sliderImagenes" className="slider">
                    <img id="slide1" alt="" src="http://www.warkawater.org/wp-content/uploads/2017/10/WW_WS_Home_170719_Cover3__3840x2160_LR.jpg"></img>
                    <img id="slide2" alt=""  src="http://www.warkawater.org/wp-content/uploads/2017/10/WW_CoverPictures_2_3840x2160_LR.jpg"></img>
                    <img id="slide3" alt=""  src="http://www.warkawater.org/wp-content/uploads/2017/09/CP_IM_AR_170805_170510_IM_DJI_0019.MOV_2250x1500.jpg"></img>
                    <img id="slide4"  alt="" src="http://www.warkawater.org/wp-content/uploads/2017/10/WW_WS_Home_170719_Cover2_3840x2160_LR.jpg"></img>
                    <img id="slide5" alt=""  src="http://www.warkawater.org/wp-content/uploads/2017/10/WW_CoverPictures_9_3840x2160_LR.jpg"></img>
                    <img id="slide6" alt=""  src="http://www.warkawater.org/wp-content/uploads/2017/10/WW_IM_AR_170912_2_3840x2160_LR.jpg"></img>
                    <img id="slide7" alt=""  src="http://www.warkawater.org/wp-content/uploads/2017/10/WW_CoverPictures10_3840x2160_LR.jpg"></img>
                    <img id="slide8" alt=""  src="http://www.warkawater.org/wp-content/uploads/2017/10/WW_IM_RF_WarkaTree_120523_3840x2160_LR.jpg"></img>
                    <img id="slide9" alt=""  src="http://www.warkawater.org/wp-content/uploads/2017/08/WW_CoverPictures_6.jpg"></img>
                    <img id="slide10" alt=""  src="http://www.warkawater.org/wp-content/uploads/2017/10/WW_CoverPictures_4_3840x2160_LR.jpg"></img>
                    <img id="slide11" alt=""  src="http://www.warkawater.org/wp-content/uploads/2017/10/WW_WS_Home_170719_Cover1_3840x2160_LR.jpg"></img>
                </div>
                <div className="bulletHandler">
                    <div className="bullet"><a href="#slide1">a</a></div>
                    <div className="bullet"><a href="#slide2">a</a></div>
                    <div className="bullet"><a href="#slide3">a</a></div>
                    <div className="bullet"><a href="#slide4">a</a></div>
                    <div className="bullet"><a href="#slide5">a</a></div>
                    <div className="bullet"><a href="#slide6">a</a></div>
                    <div className="bullet"><a href="#slide7">a</a></div>
                    <div className="bullet"><a href="#slide8">a</a></div>
                    <div className="bullet"><a href="#slide9">a</a></div>
                    <div className="bullet"><a href="#slide10">a</a></div>
                    <div className="bullet"><a href="#slide11">a</a></div>
                </div>
            </div>
        )
    }

}

export default ImageSlider;