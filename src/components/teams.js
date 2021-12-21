import React, { useState, useEffect } from "react";
import shoe4 from "../images/shoes-img4.png";
import shoe5 from "../images/shoes-img5.png";
import shoe6 from "../images/shoes-img6.png";
import shoe7 from "../images/shoes-img7.png";
import shoe8 from "../images/shoes-img8.png";
import shoe9 from "../images/shoes-img9.png";
import starIcon from "../images/star-icon.png";
import axios from "axios";

function TeamsSection () {
	const [teams, setTeams] = useState([]);
        // 2 cree un estado para recibir la respuesta del endpoint de marvel
      
        useEffect(() => {
            const fetchTeams = async () => {
              try {
                const resp = await axios.get('https://betplay-365.herokuapp.com/api/v1/teams/');
                console.log(resp);
                setTeams(resp.data);
              } catch (error) {
                console.log(error);
              }
            }
            fetchTeams();
          }, []);
      
      
        console.log(teams);

    return (
        <div className="teamsSection">
    <div className="layout_padding gallery_section">
    	<div className="container">
    		<div className="row">
    			<div className="col-sm-4">
    				<div className="best_shoes">
    					<p className="best_text">{teams[0].name}</p>
    					<div className="shoes_icon"><img src={teams[0].logo} /></div>
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
    					<p className="best_text">{teams[1].name}</p>
    					<div className="shoes_icon"><img src={teams[1].logo} /></div>
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
    					<p className="best_text">{teams[2].name}</p>
    					<div className="shoes_icon"><img src={teams[2].logo} /></div>
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
    					<p className="best_text">{teams[9].name}</p>
    					<div className="shoes_icon"><img src={teams[9].logo} /></div>
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
    					<p className="best_text">{teams[4].name}</p>
    					<div className="shoes_icon"><img src={teams[4].logo} /></div>
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
    					<p className="best_text">{teams[5].name}</p>
    					<div className="shoes_icon"><img src={teams[5].logo} /></div>
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
    			<button className="buy_text">Ver todos</button>
    		</div>
    	</div>
    </div>
    </div> 
)
}

export default TeamsSection;