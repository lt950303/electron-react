import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SilderListCom from '../commponents/silder/silderList.js'
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
} from '../common/font/myCustomFont.js';

class SilderPage extends Component{
    render(){
        const topTitle = "推荐";
        const topList = [
            {path:'/foundmusic',type:<MyFoundMusicIcon style={{fontSize: '20px'}}/>,title:'发现音乐'},
            {path:'/personalmusic',type:<MyPersonalFMIcon style={{ fontSize: '22px' }}/>,title:'私人FM'},
            {path:'/mv',type:<MyMVIcon style={{fontSize: '22px'}}/>,title:'MV'},
            {path:'/friends',type:<MyFriendsIcon style={{fontSize: '22px'}}/>,title:'朋友'}
        ]
        return (
            <div className="main-content">
                {/* <Router> */}
                    <SilderListCom title={topTitle} silderList={topList} />
                {/* </Router> */}
            </div>
        );
    }
}

export default SilderPage
