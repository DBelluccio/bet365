import React from "react";
import shoes1 from "../images/shoes-img1.png";
import starIcon from "../images/star-icon.png";
import shoes2 from "../images/shoes-img2.png";
import shoes3 from "../images/shoes-img3.png";

function matchesSection () {
    return (
        <div className="Main">
        <div className="layout_padding collection_section">
    	<div className="container">
    	    <h1 className="new_text"><strong>New  Collection</strong></h1>
    	    <p className="consectetur_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
    	    <div className="collection_section_2">
    	    	<div className="row">
    	    		<div className="col-md-6">
    	    			<div className="about-img">
    	    				<button className="new_bt">New</button>
    	    				<div className="shoes-img"><img src={shoes1} /></div>
    	    				<p className="sport_text">Men Sports</p>
    	    				<div className="dolar_text">$90 </div>
    	    				<div className="star_icon">
    	    					<ul>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
                                    <li><a href="#"><img src={starIcon} /></a></li>
                                    <li><a href="#"><img src={starIcon} /></a></li>
                                    <li><a href="#"><img src={starIcon} /></a></li>
                                    <li><a href="#"><img src={starIcon} /></a></li>

    	    					</ul>
    	    				</div>
    	    			</div>
    	    			<button className="seemore_bt">See More</button>
    	    		</div>
    	    		<div className="col-md-6">
    	    			<div className="about-img2">
    	    				<div className="shoes-img2"><img src={shoes2} /></div>
    	    				<p className="sport_text">Men Sports</p>
    	    				<div className="dolar_text">$90 </div>
    	    				<div className="star_icon">
    	    					<ul>
                                <li><a href="#"><img src={starIcon} /></a></li>
                                <li><a href="#"><img src={starIcon} /></a></li>
                                <li><a href="#"><img src={starIcon} /></a></li>
                                <li><a href="#"><img src={starIcon} /></a></li>
                                <li><a href="#"><img src={starIcon} /></a></li>
    	    					</ul>
    	    				</div>
    	    			</div>
    	    		</div>
    	    	</div>
    	    </div>
    	</div>
    </div>
    <div className="collection_section">
    	<div className="container">
    		<h1 className="new_text"><strong>Racing Boots</strong></h1>
    	    <p className="consectetur_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
    	</div>
    </div>
    <div className="collectipn_section_3 layuot_padding">
    	<div className="container">
    		<div className="racing_shoes">
    			<div className="row">
    				<div className="col-md-8">
    					<div className="shoes-img3"><img src={shoes3} /></div>
    				</div>
    				<div className="col-md-4">
    					<div className="sale_text">Sale<span>JOGING</span>SHOES</div>
    					<div className="number_text"><strong>$ <span>100</span></strong></div>
    					<button className="seemore">See More</button>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <div className="collection_section layout_padding">
    	<div className="container">
    		<h1 className="new_text"><strong>New Arrivals Products</strong></h1>
    	    <p className="consectetur_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
    	</div>
    </div>
    </div>
    )
}

export default matchesSection;