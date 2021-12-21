import React from "react";

function contactHome () {
    return (
        <div className="contactHome">
        <div className="layout_padding contact_section">
    	<div className="container">
    		<h1 className="new_text"><strong>Contact Now</strong></h1>
    	</div>
    	<div className="container-fluid ram">
    		<div className="row">
    			<div className="col-md-6">
    				<div className="email_box">
                    <div className="input_main">
                       <div className="container">
                          <form action="/action_page.php">
                            <div className="form-group">
                              <input type="text" className="email-bt" placeholder="Name" name="Name" />
                            </div>
                            <div className="form-group">
                              <input type="text" className="email-bt" placeholder="Phone Numbar" name="Name" />
                            </div>
                            <div className="form-group">
                              <input type="text" className="email-bt" placeholder="Email" name="Email" />
                            </div>
                            
                            <div className="form-group">
                                <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                            </div>
                          </form>   
                       </div> 
                       <div className="send_btn">
                        <button className="main_bt">Send</button>
                       </div>                   
                    </div>
    		</div>
    			</div>
    			<div className="col-md-6">
    				<div className="shop_banner">
    					<div className="our_shop">
    						<button className="out_shop_bt">Our Shop</button>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</div>
    )
}

export default contactHome;