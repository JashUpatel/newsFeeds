import React from 'react';

import '../index.css';

function ErrorPage(){

    return(
        <div className="container justify-content-center align-items-center cent">
        <div class="card text-center">
            <div class="card-header cardHead">
                Connection Error <i class="far fa-dizzy"></i>
            </div>
            <div class="card-body">
                <h5 class="card-title pinkColor">Unable to connect to our Servers!  <i class="far fa-frown-open"></i></h5>
                <p class="card-text pinkColor">Check your network connection and try again.</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
            <div class="card-footer text-muted pinkColor">
               ~   NewsFeeds <i class="fa fa-rss-square pinkColor"  aria-hidden="true"></i>
            </div>
        </div>
        </div>
    )

}

export default ErrorPage;