import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer(){
    const twitterClick=()=>{
        console.log("tweet")
        let url = 'https://twitter.com/Jash_u_patel';
        window.open(url,"_blank")

    }

    const fbClick=()=>{
        console.log("fb")
        let url = 'https://www.facebook.com/jash.patel.75054';
        window.open(url,"_blank")

    }
    const instaClick=()=>{
        console.log("insta")
        let url = 'https://www.instagram.com/jash_u_patel/';
        window.open(url,"_blank")

    }
    const linkClick=()=>{
        console.log("link")
        let url = 'https://www.linkedin.com/in/jash-patel-31bb9b134/'; 
        window.open(url,"_blank")

    }

    const gitClick=()=>{
        console.log("git")
        let url = 'https://github.com/JashUpatel';
        window.open(url,"_blank")

    }

    return(
        <div className="container-fluid footer" style={{backgroundColor:"#ee6e73", padding:'1.5rem 0'}}>
            <div className="text-center align-items-center headerColor ">
                <h6 className="align-middle footerFont">
                    <i class="fa fa-rss-square large"  aria-hidden="true">
                    </i> NewsFeeds : &nbsp; &nbsp;
                    <i class="fab fa-twitter" onClick={()=>twitterClick()}></i> &nbsp;&nbsp;
                    <i class="fab fa-facebook" onClick={()=>fbClick()}></i> &nbsp;&nbsp;
                    <i class="fab fa-instagram" onClick={()=>instaClick()}></i>&nbsp; &nbsp;
                    <i class="fab fa-linkedin" onClick={()=>linkClick()}></i>&nbsp; &nbsp;
                    <i class="fab fa-github" onClick={()=>gitClick()}></i>&nbsp; &nbsp;

                    </h6>
            </div>
  
      </div>);
}

export default Footer;