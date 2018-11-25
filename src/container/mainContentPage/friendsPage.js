import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
class FriendsPage extends Component{

    componentDidMount(){
        // axios.get('http://119.29.172.81:3000/banner').then(function (response) {  
        //     console.log(response);
        // });
    }
    render(){
        return (
            <div className="main-content">
                我是盆友
                我是盆友
                我是盆友
            </div>
        );
    }
}

export default FriendsPage
