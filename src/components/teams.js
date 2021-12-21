import React from "react";
import shoe4 from "../images/shoes-img4.png";
import shoe5 from "../images/shoes-img5.png";
import shoe6 from "../images/shoes-img6.png";
import shoe7 from "../images/shoes-img7.png";
import shoe8 from "../images/shoes-img8.png";
import shoe9 from "../images/shoes-img9.png";
import starIcon from "../images/star-icon.png";

function teamsSection () {
    return (
        <div className="teamsSection">
    <div className="layout_padding gallery_section">
    	<div className="container">
    		<div className="row">
    			<div className="col-sm-4">
    				<div className="best_shoes">
    					<p className="best_text">Best Shoes </p>
    					<div className="shoes_icon"><img src={shoe4} /></div>
    					<div className="star_text">
    						<div className="left_part">
    							<ul>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    					</ul>
    						</div>
    						<div className="right_part">
    							<div className="shoes_price">$ <span>60</span></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div className="col-sm-4">
    				<div className="best_shoes">
    					<p className="best_text">Best Shoes </p>
    					<div className="shoes_icon"><img src={shoe5} /></div>
    					<div className="star_text">
    						<div className="left_part">
    							<ul>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    					</ul>
    						</div>
    						<div className="right_part">
    							<div className="shoes_price">$ <span>400</span></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div className="col-sm-4">
    				<div className="best_shoes">
    					<p className="best_text">Best Shoes </p>
    					<div className="shoes_icon"><img src={shoe6} /></div>
    					<div className="star_text">
    						<div className="left_part">
    							<ul>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    					</ul>
    						</div>
    						<div className="right_part">
    							<div className="shoes_price">$ <span>50</span></div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div className="row">
    			<div className="col-sm-4">
    				<div className="best_shoes">
    					<p className="best_text">Sports Shoes</p>
    					<div className="shoes_icon"><img src={shoe7} /></div>
    					<div className="star_text">
    						<div className="left_part">
    							<ul>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    					</ul>
    						</div>
    						<div className="right_part">
    							<div className="shoes_price">$ <span>70</span></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div className="col-sm-4">
    				<div className="best_shoes">
    					<p className="best_text">Sports Shoes</p>
    					<div className="shoes_icon"><img src={shoe8} /></div>
    					<div className="star_text">
    						<div className="left_part">
    							<ul>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    					</ul>
    						</div>
    						<div className="right_part">
    							<div className="shoes_price">$ <span>100</span></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div className="col-sm-4">
    				<div className="best_shoes">
    					<p className="best_text">Sports Shoes</p>
    					<div className="shoes_icon"><img src={shoe9} /></div>
    					<div className="star_text">
    						<div className="left_part">
    							<ul>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    						<li><a href="#"><img src={starIcon} /></a></li>
    	    					</ul>
    						</div>
    						<div className="right_part">
    							<div className="shoes_price">$ <span>90</span></div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div className="buy_now_bt">
    			<button className="buy_text">Buy Now</button>
    		</div>
    	</div>
    </div>
    </div> 
)
}

export default teamsSection;