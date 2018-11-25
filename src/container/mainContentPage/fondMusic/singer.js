import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";

class Singer extends Component{
    render(){
        console.log(this.props.match);
        return (
            <div>
               歌手 歌手 歌手 歌手 歌手
            </div>
        );
    }
}

export default Singer