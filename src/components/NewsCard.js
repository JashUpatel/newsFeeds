import React, { Component } from 'react';


class NewsCard extends Component{
    constructor(props){
        super(props);
        this.state={
            link:''
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(url){
        console.log("url", url);
        // /this.setState({link:url});
        // window.location.href = url;
        window.open(url,"_blank")

    }


 render(props){
     const {item} = this.props;
    return(
        <div className="col-md-4 col-lg-4 card-deck">
            <div className="card news" onClick={()=>this.clickHandler(item.url)}>
                {/* <img className="card-img-top" src="data:image/png;base64,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" alt={item.title} /> */}
                <img src={item.urlToImage}  alt={item.title} />
                <div className="card-img-overlay">
                    <h5 className='headerColor'>{item.source.name}</h5>
                </div>

                <div className=" d-flex flex-column card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <p>{item.description}</p>
                    {/* <button className="btn btn-primary"  > */}
                   {/* <div onClick={this.clickHandler}> */}
                    <p className="nav-link pinkColor align-self-end"  >Full Article</p>
                    {/* <button onClick={() => alert('hello')} >click</button> */}
                    {/* </button> */}
                    {/* </div> */}
                </div>


            </div>

        </div>
    );
}
}

export default NewsCard; 
