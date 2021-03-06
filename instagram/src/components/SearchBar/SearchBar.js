import React, { Component } from 'react';
import PropTypes from "prop-types";
import ig_icon from './instagram-icon.png';
import ig_letters from './instagram-letters.png';
import explore_icon from './explore-icon.png';
import heart_icon from '../CommentSection/ig-heart-icon-unliked.png'
import profile_icon from './profile-icon.png'
import searchbar from './search-icon.png'
import './SearchBar.css';

const SearchBar = props => {

        // console.log("usernames: ", (this.props.data).length)
        console.log(props)
        return(
            <div className="searchBar">
                <div className="wrapped-ig">
                    <a href="" className="ig-icon-a">
                        <div className="ig-icon-div">
                            <img src={ig_icon} alt="IG icon" className="ig-icon"/>
                            <img src={ig_letters} alt="IG letters" className="ig-letters"/>
                        </div>
                    </a>
                </div>
                
                <div className="search-div">
                    <img src={searchbar} alt="searchbar icon" className="searchbar-icon"/>
                    <form type='submit'>
                        <input
                        name="search"
                        type="text" 
                        placeholder="Search" 
                        className="input-search"   
                        // onChange={(event)=> props.filterUsernames(event)}
                        onChange={props.handleInput}
                        onSubmit={props.filterUsernames}
                        // onChange={()=> props.filterDummy(event)}
                        value={props.search}
                    />
                    </form>
                    
                </div>

                <div className="profile-div">
                    <img src={explore_icon} alt="explore icon" className="explore-icon"/>
                    <img src={heart_icon} alt="heart icon" className="heart-icon"/>
                    <img src={profile_icon} alt="profile icon" className="profile-icon"/>
                </div>  
            </div>
        )
    }



export default SearchBar;