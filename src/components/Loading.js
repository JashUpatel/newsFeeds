import React from 'react';

import '../index.css';

function Loading(){

    return(
            <div className="container">
            <div class="d-flex align-items-center justify-content-center pinkColor">
            <div class="spinner-border cent" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        </div>
        </div>
  );


}


export default Loading;