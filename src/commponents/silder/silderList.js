import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,withRouter } from "react-router-dom";
import { Icon } from 'antd';
import '../../common/css/silderList.less'
import { createBrowserHistory } from 'history'
import {
    MyFoundMusicIcon,
    MyPersonalFMIcon,
    MyMVIcon,
    MyFriendsIcon,
    MyLocalMusicIcon,
    MyCollectionIcon,
    MyLikeIcon,
    MyMusicIcon,
    MyDownloadIcon,
    MyCouldIcon
} from '../../common/font/myCustomFont.js';
import MainContentPage from '../../container/mainContentPage.js'

class SilderListCom extends Component{
    constructor(props){
        super(props);
        this.state = {
            silderList: this.props.silderList
        }
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    // 编程式跳转
    handleRedirect(){
        // this.props.history.push('/personalmusic')
        // console.log(this.props.history);
        // console.log(createBrowserHistory);
    }
    render(){

        // 给每一个做成li数组
        const silderList = this.state.silderList.map(ele=>{
            return <li key={ele.title} onClick={this.handleRedirect} className="myIcon">
                <Link to={ele.path}>{ele.type}{ele.title}</Link> 
            </li>
        });
        return (
            <div className="slider-list">
            <div className='list-title'>{this.props.title}</div>
            {/* <Router> */}
                <div>
                    <ul>{silderList}</ul>
                    {/* <Route path="/personalmusic" component={MainContentPage} /> */}
                </div>
            {/* </Router> */}
            </div>
        );
    }
}

export default withRouter(SilderListCom)
