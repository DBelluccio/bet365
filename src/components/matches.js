import React , { useState, useEffect } from "react";
import axios from "axios";
import shoes1 from "../images/shoes-img1.png";
import starIcon from "../images/star-icon.png";
import shoes2 from "../images/shoes-img2.png";
import shoes3 from "../images/shoes-img3.png";

function MatchesSection () {
        const [games, setGames] = useState([]);
        // 2 cree un estado para recibir la respuesta del endpoint de marvel
      
        useEffect(() => {
            const fetchGames = async () => {
              try {
                const resp = await axios.get('https://betplay-365.herokuapp.com/api/v1/matches/');
                console.log(resp);
                setGames(resp.data);
              } catch (error) {
                console.log(error);
              }
            }
            fetchGames();
          }, []);
      
      
        console.log(games);

    return (
        <div className="Main">
        <div className="layout_padding collection_section">
    	<div className="container">
    	    <h1 className="new_text"><strong>New  Collection</strong></h1>
    	    <p className="consectetur_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
    	    {games.map((game) => (
            <div className="collection_section_2">
    	    	<div className="row">
    	    		<div className="col-md-6">
    	    			<div className="about-img">
    	    				<button className="new_bt">New</button>
    	    				<div className="shoes-img"><img src={game.urlImgTeam1} /></div>
    	    				<p className="sport_text">{game.team1}</p>
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
    	    			<button className="seemore_bt">Apostar</button>
    	    		</div>
    	    		<div className="col-md-6">
    	    			<div className="about-img2">
    	    				<div className="shoes-img2"><img src={game.urlImgTeam2} /></div>
    	    				<p className="sport_text">{game.team2}</p>
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
    	    </div> ))
                }
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

export default MatchesSection;