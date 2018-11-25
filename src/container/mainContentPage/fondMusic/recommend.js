import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import axios from 'axios';
import { Carousel } from 'antd';
import { blockParams } from 'handlebars';
import "../../../common/css/foundMusicPage.less";

class Recommend extends Component{
    constructor(props){
        super(props);
        this.state = {
            sliderList: []  
        }
    }

    componentDidMount(){
        axios.get('http://119.29.172.81:3000/banner').then((response)=> {  
            console.log(response.data);
            this.setState({
                sliderList: response.data.banners
            });
            
        });
    }
    render(){
        // console.log(this.state.sliderList.banners);
        let bannerList = this.state.sliderList.map(ele=>{
            return (
                <a key={ele.targetId} style={{display:blockParams, width:'540px',height: '200px'}}>
                    <img style={{display:blockParams, width:'540px',height: '200px'}} src={ele.imageUrl}/>
                </a>
            );
        });
        return (
            <div>
                {/* autoplay */}
                <Carousel autoplay>
                    {bannerList}
                </Carousel>
            </div>
        );
    }
}

export default Recommend