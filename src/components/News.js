import React, {Component} from 'react';
import NewsCard from './NewsCard';
import ErrorPage from './ErrorPage';
import Loading from './Loading';
import '../index.css';

class News extends Component{

    constructor(props){
        super(props);
        this.state={
            status:"",
            total:'',
            isLoading:true,
            news:[],
        }

        // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler(url){
    //     alert("url",url);
    // }

    componentDidMount(){
        const url = this.props.url;

        fetch(url)
        .then((response)=>{
            return response.json();
            // this is diff between using fetch and axios
            // in axios reponse is automatically converted into json
            // no need to do it manually like fetch
        })
        .then((data)=>{
            console.log("data",data);

            this.setState({
                isLoading:false,
                status: data.status,
                total:data.totalResults,
                news: data.articles
            })
            console.log("total",this.state.total);
        })
        .catch((error)=> {
            console.log(error)
            this.setState({isLoading:false,
            total:0,
        news:0})
        }
        );
    }

    renderItems(){
        console.log(this.state.status);
        console.log("lod",this.state.isLoading)

        if(this.state.isLoading){
           return( 
           <Loading/>
            );
        }
        if(this.state.status==='ok' && this.state.total>0 && this.state.news.length>0){
        return this.state.news.map((item)=>(
            // <div className="container">
            // <Loading/>

            <NewsCard key={item.url} item={item} />
            // </div>

        ));
        }
        else{
            return(
            <ErrorPage/>
            // <Loading/>

            );
        }
    }

    render(){
        return(
            <div className="container white">
            <div className="row">
                {this.renderItems()}
            </div>
            </div>
        );
    }
}

export default News;
